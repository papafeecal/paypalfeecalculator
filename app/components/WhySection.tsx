import Image from 'next/image';

export default function WhySection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20"></div>
            <Image 
              src="/why.svg" 
              alt="Why" 
              width={380} 
              height={380} 
              className="relative w-[380px] h-[380px]"
            />
          </div>
        </div>

        <div className="space-y-4 max-w-lg">
          <h2 className="text-5xl font-bold text-zinc-900">
            Why Use PayPal Fee Calculator?
          </h2>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            Understanding PayPal fees helps you price your products accurately and avoid unexpected deductions from your payments.
          </p>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            Whether you're a freelancer, small business owner, or online seller, knowing the exact fees ensures you receive the amount you expect.
          </p>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            Our calculator makes it easy to see both the fee amount and your final received amount instantly, helping you make informed decisions.
          </p>
          
          <p className="text-base text-zinc-700 leading-relaxed">
            Save time and eliminate manual calculations by using our free, accurate PayPal fee calculator for all your transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
