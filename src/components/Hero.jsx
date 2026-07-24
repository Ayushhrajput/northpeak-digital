import React from 'react';

export default function Hero() {
  return (
    <section  className="relative pt-32 pb-20  md:pb-28 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
    
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
     
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full corner-shape bg-blue-50 border border-blue-100/80 shadow-xs">
              <span className="flex h-2 w-2  rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-900 tracking-wide uppercase">
                Trusted by 100+ businesses
              </span>
            </div>

 
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Grow Your Business with Digital Marketing That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Converts
              </span>
            </h1>

       
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              NorthPeak Digital crafts high-performing web platforms, scalable SEO strategies, striking brand identities, and data-driven marketing campaigns built to scale your revenue.
            </p>

           
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-black/90 hover:bg-black active:scale-95 rounded-2xl corner-shape shadow-lg shadow-blue-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Get Started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 rounded-2xl corner-shape transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />


            <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl corner-shape p-4 shadow-2xl border border-slate-800 animate-float">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-auto text-[11px] text-slate-400 font-mono">analytics.northpeak.io</span>
              </div>


              <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl corner-shape border border-slate-800/80">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Monthly Recurring Revenue</p>
                    <p className="text-2xl font-bold tracking-tight text-white">$148,290.00</p>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                    +34.2% YoY
                  </span>
                </div>


                <div className="h-32 w-full pt-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" fill="none">
                    <path
                      d="M0 80 Q 50 70, 100 40 T 200 30 T 300 10"
                      stroke="#2563EB"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M0 80 Q 50 70, 100 40 T 200 30 T 300 10 L 300 100 L 0 100 Z"
                      fill="url(#gradient)"
                      opacity="0.25"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-900/80 p-3 rounded-lg corner-shape border border-slate-800">
                    <p className="text-[11px] text-slate-400">Conversion Rate</p>
                    <p className="text-base font-semibold text-slate-100">4.82%</p>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-lg corner-shape border border-slate-800">
                    <p className="text-[11px] text-slate-400">Active Leads</p>
                    <p className="text-base font-semibold text-slate-100">1,420</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}