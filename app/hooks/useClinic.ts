import { useSyncExternalStore } from "react";
import { useClinic } from "@/app/contexts/ClinicContext";

const DEFAULT_WHATSAPP = "https://api.whatsapp.com/send/?phone=5543996134770&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

export function useWhatsAppLink() {
  const { clinic } = useClinic();
  
  return useSyncExternalStore(
    () => () => {},
    () => clinic?.contact.link ?? DEFAULT_WHATSAPP,
    () => DEFAULT_WHATSAPP
  );
}

export function useClinicCity() {
  const { clinic } = useClinic();
  
  return useSyncExternalStore(
    () => () => {},
    () => clinic?.city ?? null,
    () => null
  );
}

export function useIsClinicLoading() {
  const { isLoading } = useClinic();
  return isLoading;
}
