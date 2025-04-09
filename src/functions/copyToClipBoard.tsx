// CopyToClipboard.tsx
export const copyToClipBoard = (text: string) => {
  // API Moderna
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        window.alert(`"${text}" copiado para área de transferência.`);
      })
      .catch((err) => {
        console.error("Erro ao copiar para a área de transferência via Clipboard API:", err);
        fallbackCopyToClipboard(text); // Fallback API ExecCommand
      });
  } else {
    // Fallback API ExecCommand
    console.warn("A API Clipboard não é suportada neste navegador.");
    fallbackCopyToClipboard(text);
  }
};

const fallbackCopyToClipboard = (text: string) => {
  // Caso a API moderna não esteja disponível, usar a API de ExecCommand(antiga e descontinuada)
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    window.alert(`"${text}" copiado para área de transferência.`);
  } catch (err) {
    console.error("Erro ao copiar com execCommand:", err);
    alert("Desculpe, não conseguimos copiar o número. Tente novamente.");
  }
};
