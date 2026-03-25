"use client";

import { addresses, contacts } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { useClinic } from "@/app/contexts/ClinicContext";
import MapView from "./location/MapView";
import LocationCard from "./location/LocationCard";

const cityIndexMap: Record<string, number> = {
  "Pitanga": 0,
  "Manoel": 1,
  "Ivaiporã": 2,
};

function getInitialIndex(clinicCity: string | null): number {
  if (!clinicCity) return 0;
  const cityKey = clinicCity.split(" ")[0];
  return cityIndexMap[cityKey] ?? 0;
}

export default function Location() {
  const { clinic } = useClinic();
  const [currentIndex, setCurrentIndex] = useState(() => getInitialIndex(clinic?.city ?? null));
  const hasApiKey = Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <section id="localizacao" className="section-padding bg-bege relative overflow-hidden">
      <Image fill src="/fundo2.svg" alt="Background Location Section" className="object-cover opacity-60" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 badge-primary mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Localização
          </div>
          <h2 className="heading-2 mb-6">Nossas <span className="gradient-text">Clínicas</span></h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MapView hasApiKey={hasApiKey} />
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
