"use client";

import { useEffect, useRef, useState } from "react";
import { addresses, contacts } from "@/types";

declare global {
  interface Window {
    initGoogleMaps?: () => void;
  }
}

interface MapViewProps {
  hasApiKey: boolean;
}

function createInfoWindowContent(address: typeof addresses[0], contact: typeof contacts[0]): string {
  return `
    <div style="padding: 16px; max-width: 300px; font-family: system-ui, sans-serif;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #E8637B 0%, #C94D63 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <div>
          <h3 style="margin: 0; color: #E8637B; font-weight: 700; font-size: 18px;">${address.city}</h3>
          <p style="margin: 2px 0 0 0; color: #666; font-size: 13px;">${contact.location}</p>
        </div>
      </div>
      <p style="margin: 0 0 12px 0; color: #444; font-size: 14px; line-height: 1.4;">${address.street}</p>
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 16px;">
        <svg width="14" height="14" fill="#666" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <span style="color: #1a1a1a; font-weight: 600;">${contact.number}</span>
      </div>
      <a href="${contact.link}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 20px; background: #25D366; color: white; text-decoration: none; border-radius: 25px; font-size: 14px; font-weight: 600; transition: background 0.2s;">Agendar pelo WhatsApp</a>
    </div>
  `;
}

export default function MapView({ hasApiKey }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);
  const initRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(!hasApiKey);

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
              infoWindow.open({ anchor: marker, map: map });
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
            <p className="text-text-secondary text-sm">Configure a variável de ambiente NEXT_PUBLIC_GOOGLE_MAPS_API_KEY para exibir o mapa.</p>
          </div>
        </div>
      )}
    </div>
  );
}
