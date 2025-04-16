'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface PlaceCardProps {
  place: {
    name: string;
    rating: number;
    photos?: google.maps.places.PlacePhoto[];
    vicinity: string;
  };
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const photoUrl = place.photos?.[0]?.getUrl({ maxWidth: 400 });

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {photoUrl && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={photoUrl}
            alt={place.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{place.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground mb-2">{place.vicinity}</p>
        <div className="flex items-center">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
          <span>{place.rating.toFixed(1)}</span>
        </div>
      </CardContent>
    </Card>
  );
}