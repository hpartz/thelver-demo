import { Home, Grid3X3, ShoppingCart, User } from 'lucide-react';
import { Badge } from './ui/badge';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="grid grid-cols-4 py-2">
        <button className="flex flex-col items-center py-2 px-3 text-orange-500">
          <Home className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Home</span>
        </button>
        
        <button className="flex flex-col items-center py-2 px-3 text-gray-500">
          <Grid3X3 className="w-5 h-5 mb-1" />
          <span className="text-xs">Categories</span>
        </button>
        
        <button className="flex flex-col items-center py-2 px-3 text-gray-500 relative">
          <ShoppingCart className="w-5 h-5 mb-1" />
          <span className="text-xs">Cart</span>
          <Badge className="absolute top-1 right-3 w-4 h-4 p-0 bg-orange-500 text-xs">3</Badge>
        </button>
        
        <button className="flex flex-col items-center py-2 px-3 text-gray-500">
          <User className="w-5 h-5 mb-1" />
          <span className="text-xs">Account</span>
        </button>
      </div>
    </nav>
  );
}