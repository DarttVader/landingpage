export const handleScroll = (id: string, e: React.MouseEvent) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Função de rolagem suave para diferentes seções da página