"use client";

import { addresses, contacts } from "@/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    initGoogleMaps?: () => void;
  }
}

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasApiKey = Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  const [hasError, setHasError] = useState(!hasApiKey);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current || !hasApiKey) return;
    initRef.current = true;

    const initMap = async () => {
      if (!mapRef.current) return;

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 8,
          center: { lat: -24.3541, lng: -51.7753 },
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
        });

        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        const infoWindows: google.maps.InfoWindow[] = [];

        addresses.forEach((address, index) => {
          if (address.coordinates) {
            const marker = new AdvancedMarkerElement({
              position: address.coordinates,
              map: map,
              title: address.city,
            });

            const infoWindow = new window.google.maps.InfoWindow({
              content: createInfoWindowContent(address, contacts[index]),
              maxWidth: 300,
            });

            infoWindows.push(infoWindow);

            marker.addListener("gmp-click", () => {
              infoWindows.forEach((iw) => iw.close());
              infoWindow.open({
                anchor: marker,
                map: map,
              });
            });
          }
        });

        loadedRef.current = true;
        setIsLoaded(true);
      } catch (error) {
        console.error("Erro ao inicializar mapa:", error);
        setHasError(true);
      }
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      window.initGoogleMaps = initMap;
    }
  }, [hasApiKey]);

  return (
    <section
      id="localizacao"
      className="section-padding bg-bege relative overflow-hidden"
    >
      <Image
        fill
        src="/fundo2.svg"
        alt="Background Location Section"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 badge-primary mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Localização
          </div>
          <h2 className="heading-2 mb-6">
            Nossas <span className="gradient-text">Clínicas</span>
          </h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
              <div ref={mapRef} className="w-full h-96 lg:h-125" />
              {!isLoaded && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-bege rounded-3xl">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-text-secondary">Carregando mapa...</p>
                  </div>
                </div>
              )}
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-bege rounded-3xl p-8">
                  <div className="text-center max-w-md">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-dark mb-2">Mapa não disponível</h3>
                    <p className="text-text-secondary text-sm">
                      Configure a variável de ambiente NEXT_PUBLIC_GOOGLE_MAPS_API_KEY para exibir o mapa.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="max-w-sm mx-auto">
            <LocationCard
              address={addresses[currentIndex]}
              contact={contacts[currentIndex]}
              currentIndex={currentIndex}
              total={addresses.length}
              onPrev={() => setCurrentIndex((currentIndex - 1 + addresses.length) % addresses.length)}
              onNext={() => setCurrentIndex((currentIndex + 1) % addresses.length)}
              onDotClick={(i) => setCurrentIndex(i)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function createInfoWindowContent(
  address: (typeof addresses)[0],
  contact: (typeof contacts)[0]
): string {
  return `
    <div style="padding: 16px; max-width: 300px; font-family: system-ui, sans-serif;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <div style="
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #E8637B 0%, #C94D63 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div>
          <h3 style="margin: 0; color: #E8637B; font-weight: 700; font-size: 18px;">
            ${address.city}
          </h3>
          <p style="margin: 2px 0 0 0; color: #666; font-size: 13px;">
            ${contact.location}
          </p>
        </div>
      </div>
      <p style="margin: 0 0 12px 0; color: #444; font-size: 14px; line-height: 1.4;">
        ${address.street}
      </p>
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 16px;">
        <svg width="14" height="14" fill="#666" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span style="color: #1a1a1a; font-weight: 600;">${contact.number}</span>
      </div>
      <a 
        href="${contact.link}" 
        target="_blank" 
        rel="noopener noreferrer"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          background: #25D366;
          color: white;
          text-decoration: none;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.2s;
        "
        onmouseover="this.style.background='#128C7E'"
        onmouseout="this.style.background='#25D366'"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
        Agendar pelo WhatsApp
      </a>
    </div>
  `;
}

interface LocationCardProps {
  address: (typeof addresses)[0];
  contact: (typeof contacts)[0];
  onPrev?: () => void;
  onNext?: () => void;
  onDotClick?: (index: number) => void;
  currentIndex: number;
  total: number;
}

function LocationCard({ address, contact, onPrev, onNext, onDotClick, currentIndex, total }: LocationCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 card-hover"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg text-dark">
            {address.city}
          </h4>
          <p className="text-text-secondary text-sm">{contact.location}</p>
        </div>
      </div>

      <p className="text-text-secondary text-sm mb-4 pl-16">{address.street}</p>

      <div className="flex items-center gap-2 mb-4 pl-16">
        <svg
          className="w-4 h-4 text-text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-dark font-medium">{contact.number}</span>
      </div>

      <a
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full justify-center text-sm"
      >
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
        Agendar Consulta
      </a>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={onPrev}
          className="w-10 h-10 bg-primary cursor-pointer rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onDotClick?.(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={onNext}
          className="w-10 h-10 bg-primary cursor-pointer rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
