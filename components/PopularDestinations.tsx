'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const popularDestinations = [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
    description: 'The City of Light',
  },
  {
    name: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80',
    description: 'Where tradition meets future',
  },
  {
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'The city that never sleeps',
  },
  {
    name: 'Rome',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80',
    description: 'The Eternal City',
  },
];

export default function PopularDestinations() {
  const router = useRouter();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination) => (
            <Card 
              key={destination.name}
              className="group cursor-pointer overflow-hidden"
              onClick={() => router.push(`/explore/${encodeURIComponent(destination.name)}`)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                    <p className="text-sm text-white/80">{destination.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}