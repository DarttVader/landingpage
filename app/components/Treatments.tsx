"use client";

import { treatments, type Treatment } from "@/types";
import { useState } from "react";
import TreatmentCard from "./treatments/TreatmentCard";
import TreatmentModal from "./treatments/TreatmentModal";

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const featured = treatments.filter((t) => t.featured);
  const others = treatments.filter((t) => !t.featured);

  return (
    <>
      <section id="tratamentos" className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 badge-accent mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Tratamentos
            </div>
            <h2 className="heading-2 mb-6">
              Tratamentos <span className="gradient-text">especializados</span> para você
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="text-lg text-text-secondary">
              Oferecemos uma ampla gama de tratamentos dermatológicos e estéticos, 
              sempre com foco na sua saúde e bem-estar.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="heading-3 mb-8 text-center">Tratamentos em Destaque</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((treatment, index) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  featured
                  onClick={() => setSelectedTreatment(treatment)}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading-3 mb-8 text-center text-text-secondary">Outros Tratamentos</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {others.map((treatment, index) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  onClick={() => setSelectedTreatment(treatment)}
                  index={index + featured.length}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedTreatment && (
        <TreatmentModal
          treatment={selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
        />
      )}
    </>
  );
}
