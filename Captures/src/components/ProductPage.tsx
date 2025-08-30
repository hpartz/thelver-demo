import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Heart, Share, Star, Plus, Minus, Truck, Shield } from 'lucide-react';

export function ProductPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold">Product Details</h1>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <Share className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative">
        <Badge className="absolute top-4 left-4 bg-orange-500 text-white z-10">
          -17% OFF
        </Badge>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632024894467-10dd0266ad92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwYm90dGxlc3xlbnwxfHx8fDE3NTY1NTQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Vitamin D3 Tablets"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">Medicine</Badge>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm ml-1">4.8 (156 reviews)</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">Panadol Extra Tablets</h2>
        <p className="text-gray-600 text-sm mb-4">
          Panadol Extra provides fast and effective relief from headaches, body aches, and fever. 
          Contains paracetamol and caffeine for enhanced pain relief.
        </p>

        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl font-bold text-orange-600">₦2,500</span>
          <span className="text-lg text-gray-400 line-through">₦3,000</span>
          <Badge className="bg-orange-100 text-orange-700">Save ₦500</Badge>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
            <Truck className="w-4 h-4 text-orange-600" />
            <span className="text-sm">Free Delivery</span>
          </div>
          <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
            <Shield className="w-4 h-4 text-orange-600" />
            <span className="text-sm">NAFDAC Approved</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              <Minus className="w-4 h-4" />
            </Button>
            <span className="font-semibold">1</span>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl">
          Add to Cart - ₦2,500
        </Button>
      </div>

      {/* Related Products */}
      <div className="p-4 bg-gray-50">
        <h3 className="font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2].map((item) => (
            <Card key={item} className="p-3 bg-white border-0 rounded-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY0OTg5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Related product"
                className="w-full h-20 object-cover rounded-lg mb-2"
              />
              <h4 className="text-sm font-medium mb-1">Nivea Skincare Set</h4>
              <span className="text-sm font-bold text-orange-600">₦8,500</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}