import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="PayPal Fee Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-lg font-bold text-zinc-900">
            PayPal <span className="inline-block bg-[#90DA67] text-zinc-900 px-2 py-1 -skew-x-6">Fee</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center border border-zinc-200 rounded-2xl px-2 py-1">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 rounded-2xl transition-colors">
            <Image src="/cal.svg" alt="Calculator" width={20} height={20} className="w-5 h-5" />
            <span>Calculator</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className="w-px h-6 bg-zinc-200"></div>
          
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 rounded-2xl transition-colors">
            <Image src="/tool.svg" alt="Tools" width={20} height={20} className="w-5 h-5" />
            <span>Tools</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="w-px h-6 bg-zinc-200"></div>

          <a href="#blog" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 rounded-2xl transition-colors">
            <Image src="/blog.svg" alt="Blog" width={20} height={20} className="w-5 h-5" />
            <span>Blog</span>
          </a>

          <div className="w-px h-6 bg-zinc-200"></div>

          <a href="#support" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 rounded-2xl transition-colors">
            <Image src="/support.svg" alt="Support" width={20} height={20} className="w-5 h-5" />
            <span>Support</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
