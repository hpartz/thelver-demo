import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ArrowLeft, MapPin, Clock, CreditCard, Smartphone } from 'lucide-react';

export function CheckoutPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold">Checkout</h1>
        <span className="text-sm text-gray-500">Step 1 of 3</span>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-3">
        <div className="flex items-center">
          <div className="flex-1 bg-orange-500 h-1 rounded-full"></div>
          <div className="flex-1 bg-gray-200 h-1 rounded-full ml-1"></div>
          <div className="flex-1 bg-gray-200 h-1 rounded-full ml-1"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Address</span>
          <span>Payment</span>
          <span>Confirm</span>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Delivery Address */}
        <Card className="p-4 border-0 bg-orange-50 rounded-xl">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold">Delivery Address</h3>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" className="mt-1" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+234 814 567 8900" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="address">Street Address</Label>
              <Input id="address" placeholder="15 Admiralty Way" className="mt-1" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Lagos" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="Lagos State" className="mt-1" />
              </div>
            </div>
          </div>
        </Card>

        {/* Delivery Options */}
        <Card className="p-4 border-0 bg-orange-50 rounded-xl">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold">Delivery Options</h3>
          </div>
          
          <RadioGroup defaultValue="express" className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="express" id="express" />
                <div>
                  <Label htmlFor="express" className="font-medium">Express Delivery</Label>
                  <p className="text-sm text-gray-500">45-90 minutes</p>
                </div>
              </div>
              <span className="text-sm font-medium text-orange-600">Free</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="scheduled" id="scheduled" />
                <div>
                  <Label htmlFor="scheduled" className="font-medium">Scheduled Delivery</Label>
                  <p className="text-sm text-gray-500">Choose your time slot</p>
                </div>
              </div>
              <span className="text-sm font-medium">₦1,000</span>
            </div>
          </RadioGroup>
        </Card>

        {/* Payment Method */}
        <Card className="p-4 border-0 bg-orange-50 rounded-xl">
          <div className="flex items-center space-x-2 mb-4">
            <CreditCard className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold">Payment Method</h3>
          </div>
          
          <RadioGroup defaultValue="card" className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="card" id="card" />
                <div>
                  <Label htmlFor="card" className="font-medium">Debit/Credit Card</Label>
                  <p className="text-sm text-gray-500">Visa, Mastercard, Verve</p>
                </div>
              </div>
              <CreditCard className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="transfer" id="transfer" />
                <div>
                  <Label htmlFor="transfer" className="font-medium">Bank Transfer</Label>
                  <p className="text-sm text-gray-500">GTBank, Zenith, UBA, etc.</p>
                </div>
              </div>
              <Smartphone className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="cod" id="cod" />
                <div>
                  <Label htmlFor="cod" className="font-medium">Cash on Delivery</Label>
                  <p className="text-sm text-gray-500">Pay when you receive</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">+₦500</span>
            </div>
          </RadioGroup>
        </Card>

        {/* Order Summary */}
        <Card className="p-4 border-0 bg-white rounded-xl border border-gray-200">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>3 items</span>
              <span>₦13,800</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-orange-600">Free</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-orange-600">₦13,800</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Continue Button */}
        <Button className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] py-3 rounded-xl">
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}