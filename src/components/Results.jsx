import React from 'react';

export default function Results() {
  const stats = [
    { label: 'Projects Delivered', value: '120+' },
    { label: 'Client Satisfaction', value: '95%' },
    { label: 'Average Rating', value: '4.9★' },
    { label: 'Average ROI', value: '3.5x' },
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Head of Growth, Lumina Health',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      review: 'NorthPeak revamped our web application and SEO funnel. In less than four months, our qualified inbound pipeline tripled. Their team operates like true strategic partners.',
    },
    {
      name: 'Marcus Chen',
      role: 'Co-Founder, Apex SaaS',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      review: 'The sheer attention to design detail, responsive speed, and performance optimization was refreshing. They executed our redesign ahead of schedule without a single hitch.',
    },
    {
      name: 'Elena Rostova',
      role: 'CMO, Veloce E-Commerce',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      review: 'Their performance marketing campaigns lowered our Customer Acquisition Cost by 38% while scaling our ad spend sustainably. I cannot recommend them enough.',
    },
  ];

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Results That Speak for Themselves
          </h2>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl corner-shape bg-slate-50 border border-slate-100 text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-black/90 tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-2xl corner-shape bg-white border border-slate-100 shadow-sm hover:shadow-lg  transition-all duration-300"
            >
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{item.review}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}