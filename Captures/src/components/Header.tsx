import { Search, ShoppingCart, User, Bell } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import exampleImage from 'figma:asset/e44e7ff4c4f31127214761327f348232ddca27c6.png';

export function Header() {
  return (
    <header className="bg-white border-b border-orange-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={exampleImage} 
              alt="Thelver Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-orange-600">Thelver</h1>
              <p className="text-xs text-gray-500 -mt-1">More Than Meds</p>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-orange-500" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 bg-orange-500 text-xs">3</Badge>
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search drugs, groceries, baby items..." 
            className="pl-10 bg-orange-50 border-0 rounded-xl focus:ring-2 focus:ring-orange-200"
          />
        </div>
      </div>
    </header>
  );
}