import { Button } from './ui/button';
import { Truck, Clock } from 'lucide-react';

export function PromoBanner() {
  return (
    <section className="px-4 py-6">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <Truck className="w-5 h-5 mr-2" />
            <span className="font-semibold">Free Delivery</span>
          </div>
          <h3 className="text-lg font-bold mb-1">
            Free delivery on orders above ₦15,000
          </h3>
          <p className="text-sm opacity-90 mb-3">
            Get your drugs and groceries delivered across Benin & more
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>Delivery in 45-90 mins</span>
            </div>
            <Button 
              size="sm" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-4"
            >
              Order Now
            </Button>
          </div>
        </div>
        
        {/* Decorative background pattern */}
        <div className="absolute right-0 top-0 opacity-10">
          <div className="w-24 h-24 rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
          <div className="w-16 h-16 rounded-full bg-white transform translate-x-12 translate-y-2"></div>
        </div>
      </div>
    </section>
  );
}