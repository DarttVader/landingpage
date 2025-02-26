"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MapComponentsType {
  MapContainer: typeof MapContainer;
  Marker: typeof Marker;
  Popup: typeof Popup;
  TileLayer: typeof TileLayer;
}

const LeafletMap = () => {
  const [MapComponents, setMapComponents] = useState<MapComponentsType | null>(null);

  useEffect(() => {
    import("leaflet-defaulticon-compatibility");
    import("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css");

    import("react-leaflet").then((L) => {
      setMapComponents({
        MapContainer: L.MapContainer,
        Marker: L.Marker,
        Popup: L.Popup,
        TileLayer: L.TileLayer,
      });
    });
  }, []);

  if (!MapComponents) return <p>Carregando mapa...</p>;

  const { MapContainer, Marker, Popup, TileLayer } = MapComponents;

  return (
    <MapContainer
      center={[-24.51735, -51.66724]}
      zoom={15}
      scrollWheelZoom={false}
      keyboard={true}
      className="h-full w-full border-2 border-red-wine shadow-2xl drop-shadow-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-24.51735, -51.66724]}>
        <Popup>Consultório Dra Rafaela Mazieiro.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default dynamic(() => Promise.resolve(LeafletMap), { ssr: false });
