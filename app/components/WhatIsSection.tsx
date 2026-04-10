import Image from 'next/image';

export default function WhatIsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-30"></div>
            <Image 
              src="/what.svg" 
              alt="What" 
              width={450} 
              height={450} 
              className="relative w-[450px] h-[450px]"
            />
          </div>
        </div>

        <div className="space-y-4 max-w-lg">
          <h2 className="text-5xl font-bold text-zinc-900">
            What is PayPal Fee?
          </h2>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            PayPal Fee is the transaction cost charged by PayPal when you send or receive money.
          </p>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            It varies based on the transaction type, country, and payment method, typically ranging from 2.9% to 4.99% plus a fixed fee.
          </p>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            This fee is essential for merchants and individuals to understand the actual amount they'll receive after PayPal's processing charges.
          </p>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            By calculating your PayPal fee, you can accurately price your products or services and ensure you receive the expected amount after deductions.
          </p>
        </div>
      </div>
    </section>
  );
}
