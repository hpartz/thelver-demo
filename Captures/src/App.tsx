import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategorySection } from './components/CategorySection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PromoBanner } from './components/PromoBanner';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

// Uncomment these imports to view other pages:
// import { ProductPage } from './components/ProductPage';
// import { CartPage } from './components/CartPage';
// import { CheckoutPage } from './components/CheckoutPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Homepage */}
      <Header />
      <main>
        <HeroBanner />
        <CategorySection />
        <FeaturedProducts />
        <PromoBanner />
        <Testimonials />
      </main>
      <Footer />
      <BottomNav />

      {/* Other Pages - Uncomment to view */}
      {/* <ProductPage /> */}
      {/* <CartPage /> */}
      {/* <CheckoutPage /> */}
    </div>
  );
}