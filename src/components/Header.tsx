import { Link } from '@tanstack/react-router';
import { PawPrint } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'My Dinosaurs', path: '/dinosaurs' },
    { name: 'World Map', path: '/map' },
    { name: 'Storyline', path: '/story' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-lg border-b border-green-300/20 shadow-lg shadow-green-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-700 rounded-full flex items-center justify-center ring-2 ring-green-300/50">
              <PawPrint className="text-white w-7 h-7" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
              Primal Survival
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-green-300 transition-colors duration-300 font-medium text-lg"
                activeProps={{ className: 'text-green-300 font-bold' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;