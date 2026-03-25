interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    city: string;
    message: string;
    treatment: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({ formData, onChange, onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
          Nome completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={onChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          placeholder="Seu nome completo"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="phone"
            value={formData.phone}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-dark mb-2">
            Cidade *
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
          >
            <option value="">Selecione...</option>
            <option value="Pitanga">Pitanga</option>
            <option value="Manoel Ribas">Manoel Ribas</option>
            <option value="Ivaiporã">Ivaiporã</option>
            <option value="Outra">Outra cidade</option>
          </select>
        </div>
        <div>
          <label htmlFor="treatment" className="block text-sm font-medium text-dark mb-2">
            Tratamento de interesse
          </label>
          <select
            id="treatment"
            name="treatment"
            value={formData.treatment}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
          >
            <option value="">Selecione...</option>
            <option value="Consulta Dermatológica">Consulta Dermatológica</option>
            <option value="Flacidez">Flacidez da Pele</option>
            <option value="Cancer de Pele">Rastreamento Câncer de Pele</option>
            <option value="Alopecia">Alopecia</option>
            <option value="Botox">Botox</option>
            <option value="Preenchimento">Preenchimento</option>
            <option value="Peeling">Peeling Químico</option>
            <option value="Laser">Laser</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
          placeholder="Descreva brevemente sua necessidade..."
        />
      </div>

      <button
        type="submit"
        className="btn-whatsapp w-full justify-center"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
