export interface Dinosaur {
  id: number;
  name: string;
  species: string;
  era: string;
  diet: 'Carnivore' | 'Herbivore' | 'Omnivore';
  description: string;
  funFact: string;
  image: string;
  unlocked: boolean;
  stats: {
    health: number;
    stamina: number;
    attack: number;
    speed: number;
  };
}

export const dinosaurs: Dinosaur[] = [
  {
    id: 1,
    name: "Rexy",
    species: "Tyrannosaurus Rex",
    era: "Late Cretaceous",
    diet: 'Carnivore',
    description: "The tyrant lizard king, one of the most formidable predators to have ever walked the Earth. Known for its massive skull and powerful bite.",
    funFact: "A T-Rex's bite was more than twice as powerful as a lion's bite.",
    image: "https://images.unsplash.com/photo-1599009439908-53455505b6df?w=800&q=80",
    unlocked: true,
    stats: { health: 100, stamina: 80, attack: 95, speed: 50 },
  },
  {
    id: 2,
    name: "Cera",
    species: "Triceratops",
    era: "Late Cretaceous",
    diet: 'Herbivore',
    description: "A large, three-horned dinosaur with a massive frill. Despite being a herbivore, its horns made it a dangerous opponent for any predator.",
    funFact: "The name Triceratops means 'three-horned face' in Greek.",
    image: "https://images.unsplash.com/photo-1615238359533-3c5a7b7c46d2?w=800&q=80",
    unlocked: true,
    stats: { health: 120, stamina: 70, attack: 75, speed: 40 },
  },
  {
    id: 3,
    name: "Blue",
    species: "Velociraptor",
    era: "Late Cretaceous",
    diet: 'Carnivore',
    description: "A highly intelligent and agile pack hunter. Known for its sickle-shaped claw on each foot, used to dispatch prey.",
    funFact: "Real Velociraptors were about the size of a turkey and likely had feathers.",
    image: "https://images.unsplash.com/photo-1580643269184-7a1b3f395945?w=800&q=80",
    unlocked: false,
    stats: { health: 70, stamina: 90, attack: 85, speed: 95 },
  },
  {
    id: 4,
    name: "Spike",
    species: "Stegosaurus",
    era: "Late Jurassic",
    diet: 'Herbivore',
    description: "Famous for the large plates on its back and the dangerous thagomizer on its tail. A slow-moving but well-defended herbivore.",
    funFact: "The plates on its back were likely used to regulate body temperature.",
    image: "https://images.unsplash.com/photo-1605059982539-aa6f1f200533?w=800&q=80",
    unlocked: false,
    stats: { health: 110, stamina: 60, attack: 70, speed: 30 },
  },
  {
    id: 5,
    name: "Soara",
    species: "Pteranodon",
    era: "Late Cretaceous",
    diet: 'Carnivore',
    description: "A large flying reptile, not technically a dinosaur, but a ruler of the skies. It had a distinctive crest and a large wingspan for soaring over oceans.",
    funFact: "Pteranodons had a wingspan of up to 20 feet, but their bodies were very light.",
    image: "https://images.unsplash.com/photo-1614262436058-a79a5e39373a?w=800&q=80",
    unlocked: false,
    stats: { health: 60, stamina: 100, attack: 65, speed: 100 },
  },
  {
    id: 6,
    name: "Bronto",
    species: "Brachiosaurus",
    era: "Late Jurassic",
    diet: 'Herbivore',
    description: "A gentle giant of the Jurassic period, known for its extremely long neck that allowed it to browse from the tallest trees.",
    funFact: "Brachiosaurus's front legs were longer than its back legs, giving it a sloped back.",
    image: "https://images.unsplash.com/photo-1608837828251-793b56ed9425?w=800&q=80",
    unlocked: false,
    stats: { health: 150, stamina: 50, attack: 40, speed: 20 },
  },
  {
    id: 7,
    name: "Tank",
    species: "Ankylosaurus",
    era: "Late Cretaceous",
    diet: 'Herbivore',
    description: "Often called the 'living tank' of the dinosaur world, this creature was covered in bony plates and had a powerful club on its tail for defense.",
    funFact: "Ankylosaurus's tail club was strong enough to break the bones of a T-Rex.",
    image: "https://plus.unsplash.com/premium_photo-1675627369882-23580c3c021d?w=800&q=80",
    unlocked: false,
    stats: { health: 140, stamina: 60, attack: 65, speed: 25 },
  },
  {
    id: 8,
    name: "Sailback",
    species: "Spinosaurus",
    era: "Late Cretaceous",
    diet: 'Carnivore',
    description: "Potentially the largest carnivorous dinosaur, even bigger than T-Rex. It had a huge sail on its back and was adapted for a semi-aquatic lifestyle.",
    funFact: "Spinosaurus is the only known dinosaur to have been adapted for swimming.",
    image: "https://images.unsplash.com/photo-1629225299365-575b0bae2a3a?w=800&q=80",
    unlocked: false,
    stats: { health: 90, stamina: 85, attack: 90, speed: 60 },
  },
  {
    id: 9,
    name: "Allo",
    species: "Allosaurus",
    era: "Late Jurassic",
    diet: 'Carnivore',
    description: "A large predator that was the top of the food chain in its time. It had sharp claws and a mouth full of serrated teeth.",
    funFact: "Allosaurus fossils are common, suggesting they were a very successful predator.",
    image: "https://images.unsplash.com/photo-1612462767798-2505a5f75929?w=800&q=80",
    unlocked: false,
    stats: { health: 95, stamina: 80, attack: 88, speed: 65 },
  },
  {
    id: 10,
    name: "Para",
    species: "Parasaurolophus",
    era: "Late Cretaceous",
    diet: 'Herbivore',
    description: "Known for the long, hollow crest on its head, which it may have used to make loud, resonating calls to communicate with its herd.",
    funFact: "Scientists believe the crest of the Parasaurolophus worked like a trombone.",
    image: "https://plus.unsplash.com/premium_photo-1675627369897-1f5a308f3c2a?w=800&q=80",
    unlocked: false,
    stats: { health: 80, stamina: 75, attack: 50, speed: 70 },
  },
];