import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Logo and tagline */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-1">Thelver</h3>
          <p className="text-gray-400 text-sm">More Than Meds</p>
        </div>
        
        {/* Contact info */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-orange-400" />
              <span className="text-sm">+234 814 567 8900</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm">15 Admiralty Way, Lekki Phase 1, Lagos</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-orange-400" />
              <span className="text-sm">support@thelver.com.ng</span>
            </div>
          </div>
        </div>
        
        {/* Quick links */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-300 hover:text-white">About Us</a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">Help Center</a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">Track Order</a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">Returns</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">Terms of Service</a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">Cookie Policy</a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">HIPAA Notice</a>
            </div>
          </div>
        </div>
        
        {/* Social media */}
        <div className="text-center">
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant="ghost" size="sm" className="w-10 h-10 p-0 bg-gray-800 hover:bg-gray-700">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-10 h-10 p-0 bg-gray-800 hover:bg-gray-700">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-10 h-10 p-0 bg-gray-800 hover:bg-gray-700">
              <Instagram className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-400">
            © 2025 Thelver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}