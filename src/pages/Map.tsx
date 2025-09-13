import { Card } from '../components/ui/card';
import { MapIcon } from 'lucide-react';

const Map = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent mb-8">
        World Map
      </h1>
      <Card className="overflow-hidden">
        <div 
          className="h-96 bg-cover bg-center flex items-center justify-center text-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1580665639223-8c4de5c422e6?w=1200&q=80')"}}
        >
           <div className="bg-black/60 p-8 rounded-lg">
            <MapIcon className="w-16 h-16 text-green-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">Exploration Coming Soon</h2>
            <p className="text-gray-300 mt-2">The world is vast and dangerous. Prepare to explore different regions.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Map;