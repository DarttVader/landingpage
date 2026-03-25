"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { findNearestClinic } from "@/app/lib/distance";
import { addresses, contacts, type Contact } from "@/types";

interface ClinicData {
  city: string;
  contact: Contact;
}

interface ClinicContextType {
  clinic: ClinicData | null;
  isLoading: boolean;
}

const ClinicContext = createContext<ClinicContextType | null>(null);

const STORAGE_KEY = "selected_clinic";

function getStoredClinic(): ClinicData | null {
  if (typeof window === "undefined") return null;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  
  const contact = contacts.find((c) => c.location.includes(stored.split(" ")[0]));
  if (!contact) return null;
  
  return { city: stored, contact };
}

function useGeolocation() {
  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const nearest = findNearestClinic(latitude, longitude, addresses);
        if (nearest) {
          setDetectedCity(nearest.city);
        }
        setIsChecking(false);
      },
      () => {
        setIsChecking(false);
      }
    );
  }, []);

  const isLoading = isChecking && getStoredClinic() === null;
  
  return { detectedCity, isLoading };
}

export function ClinicProvider({ children }: { children: ReactNode }) {
  const storedClinic = getStoredClinic();
  const [clinic, setClinic] = useState<ClinicData | null>(storedClinic ?? null);
  const [showSelector, setShowSelector] = useState(false);
  const { detectedCity, isLoading } = useGeolocation();

  const saveClinic = (city: string) => {
    const contact = contacts.find((c) => c.location.includes(city.split(" ")[0]));
    if (contact) {
      const data = { city, contact };
      localStorage.setItem(STORAGE_KEY, city);
      setClinic(data);
      setShowSelector(false);
    }
  };

  return (
    <ClinicContext.Provider value={{ clinic, isLoading }}>
      {children}
      {!isLoading && !clinic && (
        <ClinicSelector
          detectedCity={detectedCity}
          onSelect={saveClinic}
          show={showSelector || detectedCity !== null}
        />
      )}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error("useClinic must be used within ClinicProvider");
  }
  return context;
}

interface ClinicSelectorProps {
  detectedCity: string | null;
  onSelect: (city: string) => void;
  show: boolean;
}

function ClinicSelector({ detectedCity, onSelect, show }: ClinicSelectorProps) {
  const cities = addresses.map((a) => a.city);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-linear-to-r from-primary to-primary/90 text-white py-4 px-4 shadow-lg transition-all duration-300 animate-slide-up">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm sm:text-base">
              {detectedCity ? (
                <>
                  Detectamos que você está em <strong>{detectedCity}</strong>. 
                  É a clínica mais próxima?
                </>
              ) : (
                "Selecione a clínica mais próxima de você:"
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => onSelect(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  city === detectedCity
                    ? "bg-white text-primary"
                    : "bg-white/20 hover:bg-white/30"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
