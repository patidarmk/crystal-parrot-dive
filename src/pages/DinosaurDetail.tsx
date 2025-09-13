import { Link, useParams } from '@tanstack/react-router';
import { dinosaurs } from '../data/dinosaurs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Heart, Zap, Shield, Wind, Dna, BookHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const DinosaurDetail = () => {
  const { dinoId } = useParams({ from: '/dinosaur/$dinoId' });
  const dinosaur = dinosaurs.find(d => d.id === parseInt(dinoId, 10));

  if (!dinosaur) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Dinosaur Not Found</h1>
        <Link to="/dinosaurs" className="mt-4 inline-block text-green-400 hover:text-green-300">
          &larr; Back to My Dinosaurs
        </Link>
      </div>
    );
  }

  const stats = [
    { icon: Heart, label: 'Health', value: dinosaur.stats.health, color: "bg-red-500" },
    { icon: Zap, label: 'Stamina', value: dinosaur.stats.stamina, color: "bg-yellow-500" },
    { icon: Shield, label: 'Attack', value: dinosaur.stats.attack, color: "bg-blue-500" },
    { icon: Wind, label: 'Speed', value: dinosaur.stats.speed, color: "bg-green-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Link to="/dinosaurs" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to My Dinosaurs
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden border-2 border-green-300/20">
            <img src={dinosaur.image} alt={dinosaur.name} className="w-full h-80 object-cover" />
            <CardHeader>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">{dinosaur.name}</CardTitle>
              <p className="text-xl text-gray-400">{dinosaur.species}</p>
            </CardHeader>
            <CardContent>
              {dinosaur.unlocked ? (
                 <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg">Set as Active Dinosaur</Button>
              ) : (
                <Button className="w-full" disabled>Unlock to Play</Button>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Dna className="mr-3 text-green-400" /> Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-300">{dinosaur.description}</p>
              <div className="flex items-center space-x-4 text-lg">
                <Badge variant="outline" className="text-base border-green-400 text-green-400">{dinosaur.era}</Badge>
                <Badge className={`text-base ${dinosaur.diet === 'Carnivore' ? 'bg-red-600' : 'bg-green-600'}`}>{dinosaur.diet}</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><BookHeart className="mr-3 text-green-400" /> Fun Fact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 italic">"{dinosaur.funFact}"</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Base Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <stat.icon className="w-5 h-5" />
                      <span>{stat.label}</span>
                    </div>
                    <span className="font-bold text-white">{stat.value}</span>
                  </div>
                  <Progress value={stat.value} className="h-3" indicatorClassName={stat.color} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DinosaurDetail;