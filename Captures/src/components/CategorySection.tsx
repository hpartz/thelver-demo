import { 
  Pill, 
  Heart, 
  ShoppingBasket, 
  Home, 
  Baby, 
  Sparkles,
  Stethoscope,
  Utensils
} from 'lucide-react';

const categories = [
  { name: 'Medicines', icon: Pill, color: 'bg-orange-500' },
  { name: 'Personal Care', icon: Heart, color: 'bg-orange-400' },
  { name: 'Groceries', icon: ShoppingBasket, color: 'bg-orange-600' },
  { name: 'Household', icon: Home, color: 'bg-orange-500' },
  { name: 'Baby Products', icon: Baby, color: 'bg-orange-400' },
  { name: 'Beauty', icon: Sparkles, color: 'bg-orange-600' },
  { name: 'Health Care', icon: Stethoscope, color: 'bg-orange-500' },
  { name: 'Food & Drinks', icon: Utensils, color: 'bg-orange-400' },
];

export function CategorySection() {
  return (
    <section className="px-4 py-6 bg-white">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Shop by Category</h2>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-2 shadow-sm`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}