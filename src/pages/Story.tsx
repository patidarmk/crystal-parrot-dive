import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen } from 'lucide-react';
import { gameState } from '../data/gameState';

const Story = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent mb-8">
        Storyline
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8" />
            <span>Chapter {gameState.story.currentChapter}: A New Beginning</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-green-400">Current Quest</h3>
            <p className="text-2xl text-white mt-1">{gameState.story.currentQuest}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-400">Chapter Summary</h3>
            <p className="text-gray-300 mt-1">
              The world is on the brink of a cataclysmic event. As a survivor, you must navigate this primal landscape, gather resources, and grow stronger to face the challenges ahead. Your journey begins with the most basic of needs: securing a future for yourself and your kind.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Story;