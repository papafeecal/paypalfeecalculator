import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main grid section */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-zinc-900">
                PayPal <span className="inline-block bg-[#90DA67] text-zinc-900 px-2 py-1 -skew-x-6">Fee</span>
              </span>
            </a>
            <p className="text-sm text-zinc-500">
              Top-rated PayPal fee calculator since 2026.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="/" className="hover:text-zinc-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-4">Fee Calculators</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="/" className="hover:text-zinc-900 transition-colors">PayPal Fee</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">eBay Fee</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Amazon/FBA Fee</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Stripe Fee</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Etsy Fee</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-4">Free Tools</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Invoice Generator</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Time Card Calculator</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Working Days Calculator</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-4">Guides</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">PayPal Fees Guide</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">How to Calculate Fees</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Payment Processing Tips</a></li>
            </ul>
          </div>
        </div>

        {/* Social icons row */}
        <div className="flex flex-wrap items-center gap-4 py-8 border-t border-b border-zinc-200">
          {/* X (Twitter) */}
          <a href="https://x.com/papafeecal" target="_blank" rel="nofollow" aria-label="X (Twitter)" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/1c7/chinese-independent-developer" target="_blank" rel="nofollow" aria-label="GitHub" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          {/* Briefcase/Portfolio */}
          <a href="https://jobhub.jp/co_workers/xhtsyakadou" target="_blank" rel="nofollow" aria-label="Portfolio" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"/></svg>
          </a>
          {/* Email */}
          <a href="#" aria-label="Email" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          {/* Resume/Article */}
          <a href="https://note.com/witty_chimp3072/n/n35165e94fda4" target="_blank" rel="nofollow" aria-label="Resume" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"/></svg>
          </a>
          {/* Calendar */}
          <a href="https://haveagood.holiday/users/487183" target="_blank" rel="nofollow" aria-label="Calendar" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"/></svg>
          </a>
          {/* Globe */}
          <a href="https://make.rs/project/5988-paypalfeecalculator" target="_blank" rel="nofollow" aria-label="Product Hunt" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M5.33053 15.9288C5.115 14.9914 5.00054 14.0103 5.00054 12.9999C5.00054 7.91198 7.90319 3.5636 12.0005 1.81799C16.0979 3.5636 19.0005 7.91198 19.0005 12.9999C19.0005 14.0103 18.8861 14.9914 18.6706 15.9288L20.6907 17.7245C20.8704 17.8842 20.9109 18.1493 20.7872 18.3555L18.33 22.4508C18.1879 22.6876 17.8808 22.7644 17.644 22.6223C17.609 22.6013 17.5766 22.576 17.5477 22.5471L15.2934 20.2928C15.1059 20.1053 14.8515 19.9999 14.5863 19.9999H9.41476C9.14954 19.9999 8.89519 20.1053 8.70765 20.2928L6.45337 22.5471C6.2581 22.7424 5.94152 22.7424 5.74626 22.5471C5.71735 22.5182 5.6921 22.4859 5.67107 22.4508L3.21385 18.3555C3.09014 18.1493 3.13071 17.8842 3.31042 17.7245L5.33053 15.9288ZM12.0005 12.9999C13.1051 12.9999 14.0005 12.1045 14.0005 10.9999C14.0005 9.89537 13.1051 8.99994 12.0005 8.99994C10.896 8.99994 10.0005 9.89537 10.0005 10.9999C10.0005 12.1045 10.896 12.9999 12.0005 12.9999Z"/></svg>
          </a>
          {/* Chat/Message */}
          <a href="https://teratail.com/users/tagama" target="_blank" rel="nofollow" aria-label="Teratail" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M5.45455 15L1 18.5V3C1 2.44772 1.44772 2 2 2H17C17.5523 2 18 2.44772 18 3V15H5.45455ZM4.76282 13H16V4H3V14.3851L4.76282 13ZM8 17H18.2372L20 18.3851V8H21C21.5523 8 22 8.44772 22 9V22.5L17.5455 19H9C8.44772 19 8 18.5523 8 18V17Z"/></svg>
          </a>
          {/* Link */}
          <a href="https://lit.link/zh-tw/paypalfeecalculator" target="_blank" rel="nofollow" aria-label="HackMD" className="text-zinc-400 hover:text-zinc-700 transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"/></svg>
          </a>
        </div>

        {/* Bottom section with copyright and links */}
        <div className="pt-8">
          <p className="text-xs text-zinc-400 mb-4">
            PayPal Fee Calculator. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500 mb-4">
            Copyright © PayPal Fee Calculator 2026. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
