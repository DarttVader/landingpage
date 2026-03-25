import Image from "next/image";
import { type Treatment } from "@/types";

interface TreatmentCardProps {
  treatment: Treatment;
  featured?: boolean;
  onClick: () => void;
  index: number;
}

export default function TreatmentCard({ treatment, featured, onClick, index }: TreatmentCardProps) {
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
      <div className="relative overflow-hidden h-56">
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {featured && (
          <div className="absolute top-4 left-4 badge-primary">
            Destaque
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 font-semibold text-primary flex items-center gap-2">
            Ver detalhes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

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
