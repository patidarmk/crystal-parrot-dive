export interface GameState {
  currentDay: number;
  timeUntilAsteroid: number; // in days
  nextInvasionIn: number; // in days
  player: {
    activeDinosaurId: number;
    health: number; // percentage
    food: number; // percentage
    water: number; // percentage
  };
  story: {
    currentChapter: number;
    currentQuest: string;
    questProgress: number;
    questGoal: number;
  };
}

export const gameState: GameState = {
  currentDay: 1,
  timeUntilAsteroid: 365,
  nextInvasionIn: 3,
  player: {
    activeDinosaurId: 1,
    health: 95,
    food: 70,
    water: 85,
  },
  story: {
    currentChapter: 1,
    currentQuest: "Survive for 5 days.",
    questProgress: 0,
    questGoal: 5,
  },
};