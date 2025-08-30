import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative px-4 py-8">
        <div className="max-w-md mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Your Health & Home</h2>
          <h3 className="text-3xl font-bold mb-3">More Than Meds</h3>
          <p className="text-lg mb-6 opacity-90">
            From prescription drugs to everyday essentials - delivered across Lagos, Abuja, and beyond.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl"
          >
            Shop Now
          </Button>
        </div>
        
        {/* Background image */}
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1631367771698-606007aecd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaGFybWFjeSUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NTU0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern pharmacy interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}