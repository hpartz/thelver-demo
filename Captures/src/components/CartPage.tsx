import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Plus, Minus, Trash2, Truck, Tag } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: 'Panadol Extra Tablets',
    price: 2500,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1632024894467-10dd0266ad92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwYm90dGxlc3xlbnwxfHx8fDE3NTY1NTQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Medicine'
  },
  {
    id: 2,
    name: 'SMA Baby Formula',
    price: 4500,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1750085036915-6e21c6981586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc1NjU1NDM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Baby Care'
  },
  {
    id: 3,
    name: 'Fresh Plantain & Yam',
    price: 1800,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1646836390736-ee0af3b6e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NTY1NTQzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Groceries'
  }
];

export function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 15000 ? 0 : 1500;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold">Shopping Cart</h1>
        <span className="text-sm text-gray-500">{cartItems.length} items</span>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="p-4 border-0 bg-gray-50 rounded-xl">
            <div className="flex space-x-3">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                <h3 className="font-medium text-gray-900 mb-2 text-sm leading-tight">
                  {item.name}
                </h3>
                <span className="text-sm font-bold text-orange-600">
                  ₦{item.price.toLocaleString()}
                </span>
              </div>

              <div className="flex flex-col items-end justify-between">
                <Button variant="ghost" size="sm" className="p-1">
                  <Trash2 className="w-4 h-4 text-gray-400" />
                </Button>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="w-6 h-6 p-0">
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="sm" className="w-6 h-6 p-0">
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Promo Code */}
      <div className="p-4">
        <Card className="p-4 border-0 bg-orange-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <Tag className="w-5 h-5 text-orange-600" />
            <span className="font-medium text-orange-600">Apply Promo Code</span>
          </div>
        </Card>
      </div>

      {/* Delivery Info */}
      <div className="p-4">
        <Card className="p-4 border-0 bg-orange-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-medium text-orange-600">
                {deliveryFee === 0 ? 'Free Delivery!' : `Add ₦${(15000 - subtotal).toLocaleString()} for free delivery`}
              </p>
              <p className="text-xs text-gray-600">Delivery in 45-90 mins across Lagos & Abuja</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Order Summary */}
      <div className="p-4 bg-gray-50">
        <Card className="p-4 border-0 bg-white rounded-xl">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span>{deliveryFee === 0 ? 'Free' : `₦${deliveryFee.toLocaleString()}`}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-orange-600">₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl">
            Proceed to Checkout
          </Button>
        </Card>
      </div>
    </div>
  );
}