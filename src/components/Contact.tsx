import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, MapPin, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioContent } from '../data/content';

export const Contact: React.FC = () => {
  const { personal } = portfolioContent;
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto url with encoded subject and body
    const emailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:${personal.email}?subject=${emailSubject}&body=${emailBody}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information and Form"
      className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Get In Touch
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Let's build something remarkable.
          </p>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            Whether you are discussing engineering opportunities, distributed architecture challenges, or open-source projects, I would love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Quick Copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                Direct Email
              </h3>
              <a
                href={`mailto:${personal.email}`}
                className="mt-1 block text-base font-bold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                {personal.email}
              </a>
            </div>

            {/* Phone Card */}
            {personal.phone && (
              <div className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* LinkedIn Card */}
            <a
              href={personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 flex items-center gap-4 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  Connect on LinkedIn
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {personal.linkedIn.replace('https://', '')}
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 flex items-center gap-4 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  Open Source Code
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {personal.github.replace('https://', '')}
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  Base Location
                </div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {personal.location}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Mailto Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#161922] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  Send a Direct Message
                </h3>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-800 dark:text-blue-200 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Your email client is opening with your formatted message ready to send!</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Staff Software Engineer Role / Technical Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hello Alex, I came across your portfolio and wanted to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-xs hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose Mailto Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
