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
    return <p className="self-center w-full text-center text-4xl max-1170:text-2xl">Carregando mapa...</p>;
  };

  const { MapContainer, Marker, Popup, TileLayer } = MapComponents;

  return (
    <MapContainer
      zoom={15} keyboard={true} scrollWheelZoom={false}
      center={[-24.51735, -51.66724] as LatLngExpression}
      className="w-1/2 h-auto min-h-80 min-w-52 border-2 border-fugente drop-shadow-2xl max-1170:h-96
        max-1170:w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      <Marker title="Consultório Dra Rafaela Mazieiro." position={[-24.51735, -51.66724] as LatLngExpression}>
        <Popup className="text-base font-raleway">Consultório Dra Rafaela Mazieiro.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;





