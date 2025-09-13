import { Link } from '@tanstack/react-router';
import { dinosaurs } from '../data/dinosaurs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Lock } from 'lucide-react';

const Dinosaurs = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent mb-8">
        My Dinosaurs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dinosaurs.map(dino => (
          <Link 
            to="/dinosaur/$dinoId" 
            params={{ dinoId: dino.id.toString() }} 
            key={dino.id} 
            className="group"
          >
            <Card className="overflow-hidden h-full transition-all duration-300 group-hover:border-green-400 group-hover:shadow-green-400/20 group-hover:scale-105">
              <div className="relative">
                <img src={dino.image} alt={dino.name} className="w-full h-56 object-cover" />
                {!dino.unlocked && (
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
                    <Lock className="w-16 h-16 text-green-300" />
                    <p className="text-xl font-bold text-green-300 mt-2">LOCKED</p>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-green-200">{dino.name}</CardTitle>
                <p className="text-md text-gray-400">{dino.species}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 line-clamp-3">{dino.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dinosaurs;