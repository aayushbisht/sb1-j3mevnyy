import SearchBar from '@/components/SearchBar';
import PopularDestinations from '@/components/PopularDestinations';
import { Compass, Map, Globe2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Explore the World
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Discover amazing destinations and create unforgettable memories
          </p>
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Compass className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Your Way</h3>
              <p className="text-muted-foreground">Discover new destinations with our intelligent search</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
              <p className="text-muted-foreground">Explore locations with detailed interactive maps</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Globe2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Popular Places</h3>
              <p className="text-muted-foreground">Find the most popular attractions worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <PopularDestinations />
    </main>
  );
}