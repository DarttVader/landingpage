import { type Address, type Contact } from "@/types";

interface LocationCardProps {
  address: Address;
  contact: Contact;
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export default function LocationCard({ address, contact, currentIndex, total, onPrev, onNext, onDotClick }: LocationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg text-dark">{address.city}</h4>
          <p className="text-text-secondary text-sm">{contact.location}</p>
        </div>
      </div>

      <p className="text-text-secondary text-sm mb-4 pl-16">{address.street}</p>

      <div className="flex items-center gap-2 mb-4 pl-16">
        <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
        <button onClick={onPrev} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} onClick={() => onDotClick(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? "bg-primary" : "bg-gray-300"}`} />
          ))}
        </div>
        <button onClick={onNext} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
