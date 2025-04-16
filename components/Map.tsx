'use client';

import { useEffect, useRef } from 'react';

interface MapProps {
  center: google.maps.LatLngLiteral;
  places: Array<{
    id: string;
    name: string;
    geometry: google.maps.places.PlaceGeometry;
  }>;
}

export default function Map({ center, places }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom: 13,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
    });

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // Add new markers
    places.forEach((place, index) => {
      const marker = new google.maps.Marker({
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
        map,
        title: place.name,
        label: {
          text: (index + 1).toString(),
          color: '#ffffff',
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div class="p-2"><strong>${place.name}</strong></div>`,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      markersRef.current.push(marker);
    });
  }, [center, places]);

  return <div ref={mapRef} className="w-full h-full" />;
}