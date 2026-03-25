import Image from "next/image";
import { type Treatment } from "@/types";

interface TreatmentModalProps {
  treatment: Treatment;
  onClose: () => void;
}

export default function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm animate-fade-in" />

      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 cursor-pointer bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

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

        <div className="overflow-y-auto max-h-[calc(90vh-20rem)] p-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <p className="text-lg text-text-secondary leading-relaxed mb-8 whitespace-pre-line">
            {treatment.description}
          </p>

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
