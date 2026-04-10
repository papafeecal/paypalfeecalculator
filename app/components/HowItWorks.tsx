import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-zinc-900 leading-tight">
            How the PayPal Fee Calculator Works
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">
                  Step 1 - Choose your mode
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Select whether you're entering the amount you plan to send or the amount you want to receive after fees.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">
                  Step 2 - Enter your amount, fee percentage, and fixed fee
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Standard PayPal domestic rates of 3.49% + $0.49 are pre-filled by default.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">
                  Step 3 - Type in your preferred currency symbol
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Use $, £, €, or any other symbol to match your transaction currency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">
                  Step 4 - Instantly see the total fees and your final sent or received amount
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Hit Reset to run a new calculation anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-20"></div>
            <Image 
              src="/how.svg" 
              alt="How it works" 
              width={450} 
              height={450} 
              className="relative w-[450px] h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
