"use client"
import { useEffect } from "react";

// Tornar o ref genérico e permitir que ele aceite null
export const useClickOutside = <T extends HTMLElement>(ref: React.RefObject<T | null>, callback: () =>
  void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica se o elemento ref existe e se o clique foi fora dele
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Adiciona o ouvinte de evento quando o ref existe
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
