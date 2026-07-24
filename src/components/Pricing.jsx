import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Ideal for early-stage startups needing a sleek online presence.',
      features: ['Landing Page Design', 'SEO Basics Setup', 'Email Support', 'Mobile Optimization'],
      buttonText: 'Choose Plan',
      buttonVariant: 'secondary',
      featured: false,
    },
    {
      name: 'Growth',
      price: '$99',
      period: '/month',
      description: 'Perfect for expanding businesses looking for continuous growth.',
      features: [
        'Complete 5-Page Website',
        'Comprehensive SEO Strategy',
        'Advanced Analytics Dashboard',
        'Priority 24/7 Support',
        'Monthly Strategy Calls',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'primary',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Dedicated resources and custom architectures for established brands.',
      features: [
        'Unlimited Web Development',
        'Dedicated Account Manager',
        'Custom Marketing Automations',
        'Tailored SLA & Onboarding',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            Transparent plans with zero hidden fees. Scale up or down as your needs evolve.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between p-8 rounded-2xl corner-shape transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-slate-900 text-white shadow-2xl lg:-translate-y-2'
                  : 'bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold tracking-wider text-white uppercase bg-blue-600 rounded-full corner-shape shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className={`text-xl font-bold tracking-tight ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-xs leading-relaxed ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={`ml-1 text-sm ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <svg
                        className={`w-5 h-5 mr-3 shrink-0 ${plan.featured ? 'text-emerald-400' : 'text-emerald-500'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.featured ? 'text-slate-200' : 'text-slate-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className={`w-full block text-center py-3.5 px-6 rounded-xl corner-shape font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.featured
                      ? 'bg-blue-600 text-white hover:bg-black/90 shadow-md shadow-black/20'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}