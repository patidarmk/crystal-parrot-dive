export interface GameEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  choices: [EventChoice, EventChoice];
}

export interface EventChoice {
  text: string;
  effects: {
    health?: number;
    food?: number;
    water?: number;
  };
  resultText: string;
}

export const events: GameEvent[] = [
  {
    id: 1,
    title: "A Strange Plant!",
    description: "You find a patch of bright red berries. They look tasty, but you've never seen them before.",
    image: "https://images.unsplash.com/photo-1518908336710-4e0cf32207b1?w=800&q=80",
    choices: [
      {
        text: "Eat the berries",
        effects: { food: 20, health: -10 },
        resultText: "Ouch! Those berries were poisonous. Your tummy hurts, but you're not as hungry.",
      },
      {
        text: "Leave them alone",
        effects: { food: -5 },
        resultText: "Good choice. It's better to be safe than sorry. You move on, feeling a bit hungrier.",
      },
    ],
  },
  {
    id: 2,
    title: "A Sparkling River",
    description: "You come across a wide, clear river flowing gently. The water looks so refreshing!",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&q=80",
    choices: [
      {
        text: "Drink your fill",
        effects: { water: 30, food: -5 },
        resultText: "You drink the cool, clean water and feel completely refreshed!",
      },
      {
        text: "Take a quick sip",
        effects: { water: 15, food: -2 },
        resultText: "You take a small drink to be safe. It's very refreshing.",
      },
    ],
  },
  {
    id: 3,
    title: "A Rumbling Volcano",
    description: "The ground starts to shake, and you see smoke rising from the big mountain in the distance.",
    image: "https://images.unsplash.com/photo-1594223893634-a8055d633658?w=800&q=80",
    choices: [
      {
        text: "Find a cave to hide",
        effects: { health: 5, food: -10, water: -10 },
        resultText: "You hide in a dark cave until the shaking stops. You feel safe but hungry.",
      },
      {
        text: "Run away fast!",
        effects: { health: -10, food: -15, water: -15 },
        resultText: "You run as fast as you can! You're safe from the volcano but very tired and hungry now.",
      },
    ],
  },
  {
    id: 4,
    title: "A Lost Baby Dino",
    description: "You hear a little cry and find a small, lost dinosaur. It looks scared and is calling for its mommy.",
    image: "https://images.unsplash.com/photo-1598438824632-643a8a7a18a8?w=800&q=80",
    choices: [
      {
        text: "Help it find its mom",
        effects: { health: 10, food: -5, water: -5 },
        resultText: "You help the baby find its family. Its mom is so happy she nuzzles you. You feel great!",
      },
      {
        text: "Ignore it",
        effects: { health: -5 },
        resultText: "You walk away, leaving the baby dino behind. You feel a little sad about it.",
      },
    ],
  },
  {
    id: 5,
    title: "A Sunny Meadow",
    description: "You discover a beautiful, sunny meadow full of soft grass and colorful flowers. It's a perfect place to rest.",
    image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=800&q=80",
    choices: [
      {
        text: "Take a long nap",
        effects: { health: 20, food: -10, water: -10 },
        resultText: "You take a wonderful nap in the sun and wake up feeling rested and healthy.",
      },
      {
        text: "Graze on the grass",
        effects: { food: 15, water: 5 },
        resultText: "You spend some time eating the yummy grass. It's a peaceful and filling meal.",
      },
    ],
  },
];