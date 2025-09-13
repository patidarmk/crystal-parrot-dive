import { useState } from 'react';
import { gameState as initialGameState } from '../data/gameState';
import { dinosaurs } from '../data/dinosaurs';
import { events, GameEvent, EventChoice } from '../data/events';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Heart, Droplet, Drumstick, Calendar, ShieldAlert, BookOpen, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Index = () => {
  const [gameState, setGameState] = useState(initialGameState);
  const [activeEvent, setActiveEvent] = useState<GameEvent | null>(null);

  const activeDinosaur = dinosaurs.find(d => d.id === gameState.player.activeDinosaurId);

  if (!activeDinosaur) {
    return <div>Error: Active dinosaur not found.</div>;
  }

  const handleNextDay = () => {
    const randomIndex = Math.floor(Math.random() * events.length);
    setActiveEvent(events[randomIndex]);
  };

  const handleChoice = (choice: EventChoice) => {
    setActiveEvent(null); // Close the dialog immediately

    setGameState(prevState => {
      let { health, food, water } = prevState.player;
      let { currentDay, timeUntilAsteroid, story } = prevState;

      const newHealth = Math.min(100, Math.max(0, health + (choice.effects.health || 0)));
      const newFood = Math.min(100, Math.max(0, food + (choice.effects.food || 0)));
      const newWater = Math.min(100, Math.max(0, water + (choice.effects.water || 0)));
      
      toast.info(choice.resultText, {
        description: `Health: ${newHealth.toFixed(0)}%, Food: ${newFood.toFixed(0)}%, Water: ${newWater.toFixed(0)}%`,
      });

      const newQuestProgress = story.questProgress + 1;
      if (newQuestProgress >= story.questGoal) {
        toast.success("Quest Complete!", {
          description: story.currentQuest,
        });
      }

      if (newHealth <= 0) {
        toast.error("Your dinosaur has fainted!", {
          description: "The game is over. Refresh to try again.",
        });
      }
      if (timeUntilAsteroid - 1 <= 0) {
        toast.error("The asteroid has impacted!", {
            description: "The world has changed forever. Game over.",
        });
      }

      return {
        ...prevState,
        currentDay: currentDay + 1,
        timeUntilAsteroid: timeUntilAsteroid - 1,
        nextInvasionIn: prevState.nextInvasionIn > 1 ? prevState.nextInvasionIn - 1 : Math.floor(Math.random() * 5) + 3,
        player: {
          ...prevState.player,
          health: newHealth,
          food: newFood,
          water: newWater,
        },
        story: {
          ...prevState.story,
          questProgress: newQuestProgress,
        }
      };
    });
  };

  const getStatusColor = (value: number) => {
    if (value > 60) return "[&>div]:bg-green-400";
    if (value > 30) return "[&>div]:bg-yellow-400";
    return "[&>div]:bg-red-500";
  };

  const statusItems = [
    { icon: Heart, label: 'Health', value: gameState.player.health },
    { icon: Drumstick, label: 'Food', value: gameState.player.food },
    { icon: Droplet, label: 'Water', value: gameState.player.water },
  ];

  const gameInfoItems = [
    { icon: Clock, label: 'Current Day', value: gameState.currentDay },
    { icon: Calendar, label: 'Asteroid Impact', value: `${gameState.timeUntilAsteroid} days` },
    { icon: ShieldAlert, label: 'Next Invasion', value: `${gameState.nextInvasionIn} days` },
  ];

  const isGameOver = gameState.player.health <= 0 || gameState.timeUntilAsteroid <= 0;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Dinosaur</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={activeDinosaur.image} alt={activeDinosaur.name} className="rounded-lg w-full h-64 object-cover mb-4" />
                <h3 className="text-3xl font-bold text-white">{activeDinosaur.name}</h3>
                <p className="text-lg text-green-400">{activeDinosaur.species}</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-900/50 to-gray-900/50">
                <CardTitle className="text-2xl mb-4 text-center">Ready for an Adventure?</CardTitle>
                <Button onClick={handleNextDay} disabled={isGameOver} size="lg" className="w-full p-8 text-xl bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-500/20 transform hover:scale-105 transition-transform duration-300">
                    <Sparkles className="mr-4 h-8 w-8" /> Start New Day!
                </Button>
            </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Survival Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {statusItems.map(item => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    <span className="font-bold text-white">{item.value.toFixed(0)}%</span>
                  </div>
                  <Progress value={item.value} className={cn("h-3", getStatusColor(item.value))} />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gameInfoItems.map(item => (
              <Card key={item.label} className="p-4 text-center">
                <div className="flex justify-center mb-2">
                  <item.icon className="w-8 h-8 text-green-300" />
                </div>
                <p className="text-gray-400">{item.label}</p>
                <p className="text-2xl font-bold text-white">{item.value}</p>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <BookOpen className="w-8 h-8 text-green-300" />
              <div>
                <CardTitle>Current Quest</CardTitle>
                <p className="text-gray-400">Chapter {gameState.story.currentChapter}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-white">{gameState.story.currentQuest}</p>
              <div className="mt-2">
                <Progress value={(gameState.story.questProgress / gameState.story.questGoal) * 100} className="h-3 [&>div]:bg-gradient-to-r from-yellow-400 to-amber-500" />
                <p className="text-right text-sm text-gray-400 mt-1">{gameState.story.questProgress} / {gameState.story.questGoal} Days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <AlertDialog open={activeEvent !== null}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <img src={activeEvent?.image} alt={activeEvent?.title} className="rounded-lg w-full h-48 object-cover mb-4" />
            <AlertDialogTitle className="text-2xl">{activeEvent?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {activeEvent?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeEvent?.choices.map((choice, index) => (
              <AlertDialogAction key={index} onClick={() => handleChoice(choice)} className="h-auto p-4 text-base whitespace-normal text-center">
                {choice.text}
              </AlertDialogAction>
            ))}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Index;