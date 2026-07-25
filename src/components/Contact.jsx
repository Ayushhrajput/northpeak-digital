import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.company.trim()) {
      errs.company = 'Company name is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters long.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', company: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's Work Together
            </h2>
            <p className="mt-3 text-lg text-slate-600 font-normal">
              Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-slate-50  p-8 sm:p-10 rounded-2xl corner-shape shadow-xs">
            {isSubmitted ? (
              <div
                role="alert"
                className="p-6 rounded-xl   text-center space-y-2 animate-fadeIn"
              >
                <div className="w-12 h-12 rounded-full corner-shape bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Thank you! We'll get back to you soon.</h3>
                <p className="text-sm text-slate-600">Your message has been safely received.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 hover:underline focus:outline-none"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl corner-shape shadow bg-white text-slate-900 text-sm focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-rose-400'
                        : ''
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.fullName}</p>}
                </div>

         
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl corner-shape shadow bg-white text-slate-900 text-sm focus:outline-none  transition-colors ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-400'
                        : ' focus:border-transparent'
                    }`}
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.email}</p>}
                </div>

           
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                    Company <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl corner-shape shadow bg-white text-slate-900 text-sm focus:outline-none  transition-colors ${
                      errors.company
                        ? 'border-rose-400 focus:ring-rose-400'
                        : '  focus:border-transparent'
                    }`}
                    placeholder="Acme Inc."
                  />
                  {errors.company && <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.company}</p>}
                </div>

             
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl corner-shape shadow bg-white text-slate-900 text-sm focus:outline-none  transition-colors ${
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-400'
                        : ' focus:border-transparent'
                    }`}
                    placeholder="Tell us about your project goals and timeline..."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.message}</p>}
                </div>

               
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl corner-shape bg-black hover:bg-black/90 active:scale-95 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all focus:outline-none  "
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}