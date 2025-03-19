"use client";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";

const LeafletMap = () => {
  const [Leaflet, setLeaflet] = useState<typeof import("leaflet") | null>(null);
  const [MapComponents, setMapComponents] = useState<typeof import("react-leaflet") | null>(null);

  useEffect(() => {
    import("leaflet/dist/leaflet.css");
    import("leaflet-defaulticon-compatibility");
    import("leaflet").then((mod) => { setLeaflet(mod); });
    import("react-leaflet").then((mod) => { setMapComponents(mod); });
    import("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css");
  }, []);

  if (!Leaflet || !MapComponents) {
    return <p>Carregando mapa...</p>;
  }

  const { MapContainer, Marker, Popup, TileLayer } = MapComponents;

  return (
    <div className="h-full w-full min-h-96 min-w-96 content-center justify-items-start">
      <MapContainer
        zoom={15} keyboard={true} scrollWheelZoom={false}
        center={[-24.51735, -51.66724] as LatLngExpression}
        className="h-full w-full border-2 border-fugente drop-shadow-2xl">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={[-24.51735, -51.66724] as LatLngExpression}>
          <Popup className="text-base font-raleway">Consultório Dra Rafaela Mazieiro.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;





