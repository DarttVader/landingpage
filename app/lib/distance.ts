interface Coordinates {
  lat: number;
  lng: number;
}

export function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
  const R = 6371;
  const dLat = toRad(coord2.lat - coord1.lat);
  const dLng = toRad(coord2.lng - coord1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coord1.lat)) * Math.cos(toRad(coord2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function findNearestClinic(
  userLat: number,
  userLng: number,
  clinics: { city: string; coordinates?: Coordinates }[]
): { city: string; distance: number } | null {
  if (!clinics.length) return null;

  let nearest = clinics[0];
  let minDistance = Infinity;

  for (const clinic of clinics) {
    if (!clinic.coordinates) continue;
    const dist = calculateDistance(
      { lat: userLat, lng: userLng },
      clinic.coordinates
    );
    if (dist < minDistance) {
      minDistance = dist;
      nearest = clinic;
    }
  }

  return {
    city: nearest.city,
    distance: Math.round(minDistance),
  };
}
