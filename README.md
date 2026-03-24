# Clínica Dra. Rafaela Mazieiro - Landing Page

Landing page profissional para clínica de dermatologia.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilização
- **Google Maps API** - Mapa interativo
- **Vercel Analytics** - Análise de performance

## 📁 Estrutura do Projeto

```
app/
├── components/
│   ├── Header.tsx       # Navegação com menu responsivo
│   ├── Hero.tsx         # Seção principal com imagem
│   ├── About.tsx        # Sobre a doutora
│   ├── Treatments.tsx   # Cards de tratamentos com modal
│   ├── Location.tsx     # Mapa e endereços das clínicas
│   ├── Contact.tsx      # Formulário de contato
│   ├── Footer.tsx       # Rodapé com links
│   └── ScrollToTop.tsx  # Botão para voltar ao topo
├── lib/
│   └── constants.ts     # Constantes da aplicação
├── types/
│   └── index.ts         # Tipos TypeScript
├── app/
│   ├── globals.css      # Estilos globais e tema
│   ├── layout.tsx       # Layout raiz com fontes e metadata
│   └── page.tsx         # Página principal
└── public/
    └── (imagens e assets)
```

## 🎨 Design System

### Cores
- **Primary**: #E8637B (Rosa vibrante)
- **Primary Dark**: #C94D63
- **Vinho**: #8B3A50
- **Accent**: #C9A962 (Dourado)
- **Background**: #FDF8F5 (Bege)
- **Text**: #1A1A1A, #666666

### Tipografia
- **Display**: Playfair Display (títulos)
- **Body**: Raleway (corpo de texto)

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Maps API Key (obrigatório para o mapa)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_aqui

# Google Maps Map ID (obrigatório para AdvancedMarkerElement)
NEXT_PUBLIC_GOOGLE_MAPS_ID=seu_map_id_aqui
```

Para obter a chave API:
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto ou selecione existente
3. Ative a API "Maps JavaScript API"
4. Vá em Credenciais > Criar Credenciais > Chave de API
5. Restrinja a chave para seu domínio (opcional mas recomendado)

Para criar o Map ID (necessário para marcadores avançados):
1. Acesse [Google Maps Studio](https://console.cloud.google.com/google/maps-apis/studio/maps)
2. Clique em "Create Map ID"
3. Dê um nome ao mapa (ex: "Dermatologia Clínica")
4. Selecione o tipo de mapa (Cloud Styling é recomendado)
5. Copie o Map ID gerado para a variável `NEXT_PUBLIC_GOOGLE_MAPS_ID`

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Verificação de lint
npm run lint
```

## 🌐 Funcionalidades

### Header
- Menu de navegação responsivo
- Logo clicável
- Botão CTA do WhatsApp com animação

### Hero
- Imagem da dra. com moldura decorativa
- Badge de credenciais (CRM-PR)
- CTAs para WhatsApp e ver tratamentos
- Cards flutuantes com localização e rating
- Indicador de scroll

### Sobre
- Foto com credenciais
- Descrição da clínica
- Estatísticas de experiência

### Tratamentos
- Cards em destaque (6 principais)
- Grid de outros tratamentos (7)
- Modal com detalhes ao clicar
- Links para WhatsApp por tratamento

### Localização
- Mapa interativo com 3 clínicas
- Marcadores personalizados (AdvancedMarkerElement)
- Info windows com WhatsApp (apenas uma aberta por vez)
- Cards laterais com endereços

### Contato
- Formulário completo
- WhatsApp direto
- Redes sociais
- Horário de atendimento

### Footer
- Logo e descrição
- Links rápidos
- Endereços das clínicas
- Redes sociais

## 📱 Responsividade

- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navegação colapsável em mobile
- Grid adaptativo para tratamentos
- Cards responsivos

## 🔧 Desenvolvimento

Para rodar o projeto localmente:

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env.local

# Editar .env.local com sua API key

# Iniciar desenvolvimento
npm run dev
```

## 📄 Licença

Copyright © 2024 Dra. Rafaela Mazieiro. Todos os direitos reservados.
Desenvolvido por Fabio Ghizoni.
