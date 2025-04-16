'use client';

import { useEffect, useState } from 'react';
import PlaceCard from '@/components/PlaceCard';
import Map from '@/components/Map';
import { Loader2 } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  rating: number;
  photos?: google.maps.places.PlacePhoto[];
  vicinity: string;
  geometry: google.maps.places.PlaceGeometry;
}

export default function ExplorePage({ params }: { params: { location: string } }) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const searchPlaces = async () => {
      const geocoder = new google.maps.Geocoder();
      const placesService = new google.maps.places.PlacesService(document.createElement('div'));

      try {
        const { results } = await new Promise<google.maps.GeocoderResponse>((resolve, reject) => {
          geocoder.geocode({ address: decodeURIComponent(params.location) }, (results, status) => {
            if (status === 'OK') resolve({ results });
            else reject(status);
          });
        });

        const location = results[0].geometry.location;
        setCenter({ lat: location.lat(), lng: location.lng() });

        const { places: nearbyPlaces } = await new Promise<{ places: Place[] }>((resolve, reject) => {
          placesService.nearbySearch(
            {
              location,
              radius: 5000,
              type: 'tourist_attraction',
              rankBy: google.maps.places.RankBy.RATING,
            },
            (results, status) => {
              if (status === 'OK') {
                resolve({
                  places: results
                    .slice(0, 20)
                    .map((place) => ({
                      id: place.place_id!,
                      name: place.name!,
                      rating: place.rating!,
                      photos: place.photos,
                      vicinity: place.vicinity!,
                      geometry: place.geometry!,
                    })),
                });
              } else reject(status);
            }
          );
        });

        setPlaces(nearbyPlaces);
      } catch (error) {
        console.error('Error fetching places:', error);
      } finally {
        setLoading(false);
      }
    };

    searchPlaces();
  }, [params.location]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 h-screen overflow-y-auto p-6">
        <h2 className="text-2xl font-bold mb-6">
          Popular Places in {decodeURIComponent(params.location)}
        </h2>
        <div className="grid gap-6">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
      <div className="w-1/2 h-screen">
        <Map center={center} places={places} />
      </div>
    </div>
  );
}