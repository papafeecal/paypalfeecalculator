import FeeCalculator from './FeeCalculator';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 mt-8">
          <div className="inline-block">
            <Image src="/cal.svg" alt="Calculator" width={96} height={96} className="w-24 h-24" />
          </div>
          
          <h1 className="text-5xl font-bold text-zinc-900 leading-tight">
            PayPal Fee Calculator
            <span className="block mt-2">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 -skew-x-6">
                2026
              </span>
            </span>
          </h1>
          
          <p className="text-lg text-zinc-600 leading-relaxed mt-4">
            PayPal is a popular online payment service. Use our simple calculator to figure out how much PayPal's processing fee will be, and see exactly how much you'll receive after fees are deducted.
          </p>

          <div className="pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/more-tools.svg" alt="More Tools" width={24} height={24} className="w-6 h-6" />
              <h2 className="text-xl font-bold text-zinc-900">More Fee Calculators</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-900 rounded-2xl hover:bg-zinc-50 transition-colors">
                <span className="font-medium text-zinc-900">eBay Fee Calculator</span>
                <Image src="/arrow-right.svg" alt="Arrow" width={20} height={20} className="w-5 h-5" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-900 rounded-2xl hover:bg-zinc-50 transition-colors">
                <span className="font-medium text-zinc-900">Amazon/FBA Fee Calculator</span>
                <Image src="/arrow-right.svg" alt="Arrow" width={20} height={20} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <FeeCalculator />
        </div>
      </div>
    </section>
  );
}
