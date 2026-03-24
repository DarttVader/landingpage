"use client";

import { treatments, type Treatment } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const featured = treatments.filter((t) => t.featured);
  const others = treatments.filter((t) => !t.featured);

  return (
    <>
      <section id="tratamentos" className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Header */}
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

          {/* Featured Treatments */}
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

          {/* Other Treatments */}
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

      {/* Modal */}
      {selectedTreatment && (
        <TreatmentModal
          treatment={selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
        />
      )}
    </>
  );
}

interface TreatmentCardProps {
  treatment: Treatment;
  featured?: boolean;
  onClick: () => void;
  index: number;
}

function TreatmentCard({ treatment, featured, onClick, index }: TreatmentCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
        animate-slide-up
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 badge-primary">
            Destaque
          </div>
        )}

        {/* View More Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 font-semibold text-primary flex items-center gap-2">
            Ver detalhes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className={`font-display font-bold text-dark mb-3 group-hover:text-primary transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {treatment.title}
        </h4>
        <p className="text-text-secondary text-sm line-clamp-2">
          {treatment.shortDescription}
        </p>
        
        {featured && (
          <div className="mt-4 flex items-center text-primary font-medium">
           Saiba mais
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

interface TreatmentModalProps {
  treatment: Treatment;
  onClose: () => void;
}

function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 cursor-pointer bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80">
          <Image
            src={treatment.image}
            alt={treatment.title}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="heading-2 text-white">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            {treatment.description}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://api.whatsapp.com/send/?phone=5543996134770&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20tratamento%20de%20${encodeURIComponent(treatment.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Informações
            </a>
            <a
              href="#contato"
              onClick={onClose}
              className="btn-secondary flex-1 justify-center"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
