"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

const Map = () => {
  const ApiKey = process.env.API_KEY;
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {

      const loader = new Loader({
        version: "weekly",
        apiKey: ApiKey as string,
      });

      // Load the maps API
      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const position = {
        lat: -24.5168,
        lng: -51.66830062,
      };
      // Map options
      const mapOptions: google.maps.MapOptions = {
        zoom: 15,
        center: position,
        zoomControl: true,
        mapId: "google-map",
        keyboardShortcuts: true,
      };
      // Create map instance
      const map = new Map(mapRef.current as HTMLElement, mapOptions);
      // Create marker instance
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Rafaela Mazieiro",
      });
      marker.title = "Rafaela Mazieiro";
      marker.className = "cursor-pointer";

      const overlay = new google.maps.OverlayView();
      overlay.onAdd = () => {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.backgroundColor = "#EA4335";
        div.style.opacity = "0.9";
        div.style.padding = "5px";
        div.style.borderColor = "#B31412";
        div.style.borderWidth = "2px";
        div.style.borderRadius = "8px";
        div.style.fontSize = "14px";
        div.style.webkitTextFillColor = "white"; // Cor do texto
        div.innerHTML = "Dra Rafaela Mazieiro"; // Texto da div

        // Adicionar a div ao container do mapa
        const panes = overlay.getPanes() as google.maps.MapPanes;
        panes.overlayLayer.appendChild(div);

        // Posicionar a div em cima do marcador
        overlay.draw = () => {
          const divWidth = div.offsetWidth;
          const projection = overlay.getProjection();
          const position = marker.position;
          const point = projection.fromLatLngToDivPixel(position as google.maps.LatLng) as google.maps.Point;
          div.style.left = `${point.x - divWidth / 2}px`;
          div.style.top = `${point.y - 65}px`;
        };
      };

      overlay.setMap(map);
    };
    initMap();
  },);
  return <div className="w-full h-full border-2 border-rosa-claro min-w-72 min-h-72" ref={mapRef} />
};

export default Map;
