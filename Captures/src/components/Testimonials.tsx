import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Adunni Okafor',
    rating: 5,
    comment: 'Amazing service! Got my prescription and groceries delivered in 60 minutes to Lekki. The app is so easy to use.',
    location: 'Lekki, Lagos',
    avatar: 'AO'
  },
  {
    id: 2,
    name: 'Kemi Adebayo',
    rating: 5,
    comment: 'Thelver has everything I need. Great prices on both drugs and everyday items. Highly recommended!',
    location: 'Wuse 2, Abuja',
    avatar: 'KA'
  },
  {
    id: 3,
    name: 'Chiamaka Eze',
    rating: 4,
    comment: 'Super convenient for busy parents. Love that I can get baby products and my medications in one order.',
    location: 'Ikeja, Lagos',
    avatar: 'CE'
  }
];

export function Testimonials() {
  return (
    <section className="px-4 py-6 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">What Our Customers Say</h2>
        <p className="text-gray-600">Trusted by thousands for health and home needs</p>
      </div>
      
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-4 bg-gray-50 border-0 rounded-xl">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-gray-500 ml-2">• {testimonial.location}</span>
                </div>
                
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-3 h-3 ${
                        index < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
              
              <Quote className="w-4 h-4 text-gray-300 flex-shrink-0" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}