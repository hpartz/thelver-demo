import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus, Star } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Panadol Extra Tablets',
    price: 2500,
    originalPrice: 3000,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1632024894467-10dd0266ad92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwYm90dGxlc3xlbnwxfHx8fDE3NTY1NTQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Medicine',
    discount: 17,
  },
  {
    id: 2,
    name: 'SMA Baby Formula',
    price: 4500,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1750085036915-6e21c6981586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc1NjU1NDM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Baby Care',
    discount: null,
  },
  {
    id: 3,
    name: 'Fresh Plantain & Yam',
    price: 1800,
    originalPrice: 2500,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1646836390736-ee0af3b6e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NTY1NTQzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Groceries',
    discount: 28,
  },
  {
    id: 4,
    name: 'Nivea Skincare Set',
    price: 8500,
    originalPrice: 12000,
    rating: 4.6,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY0OTg5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Personal Care',
    discount: 29,
  },
];

export function FeaturedProducts() {
  return (
    <section className="px-4 py-6 bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Featured Products</h2>
        <Button variant="ghost" size="sm" className="text-orange-600">
          View All
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="bg-white rounded-xl shadow-sm border-0 overflow-hidden">
            <div className="relative">
              {product.discount && (
                <Badge className="absolute top-2 left-2 bg-orange-500 text-white z-10">
                  -{product.discount}%
                </Badge>
              )}
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
            </div>
            
            <div className="p-3">
              <p className="text-xs text-gray-500 mb-1">{product.category}</p>
              <h3 className="font-medium text-gray-900 mb-2 text-sm leading-tight">
                {product.name}
              </h3>
              
              <div className="flex items-center mb-2">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600 ml-1">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-orange-600">₦{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ₦{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 h-8 w-8 p-0 rounded-lg">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}