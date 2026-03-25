import { addresses, contacts } from "@/types";

export const cityIndexMap: Record<string, number> = {
  "Pitanga": 0,
  "Manoel": 1,
  "Ivaiporã": 2,
};

export const cityKeyMap: Record<string, string> = {
  "Pitanga": "Pitanga",
  "Manoel": "Manoel Ribas",
  "Ivaiporã": "Ivaiporã",
};

export function getClinicIndex(city: string | null): number {
  if (!city) return 0;
  const cityKey = city.split(" ")[0];
  return cityIndexMap[cityKey] ?? 0;
}

export function getClinicCity(city: string | null): string {
  if (!city) return "";
  const cityKey = city.split(" ")[0];
  return cityKeyMap[cityKey] || "";
}

export function getCurrentAddress(index: number) {
  return addresses[index] ?? addresses[0];
}

export function getCurrentContact(index: number) {
  return contacts[index] ?? contacts[0];
}
