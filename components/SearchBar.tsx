'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/explore/${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Where would you like to go?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 h-12 text-lg bg-white/90 backdrop-blur-sm border-2 border-white/20"
          />
        </div>
        <Button type="submit" size="lg" className="h-12 px-8">
          Search
        </Button>
      </div>
    </form>
  );
}