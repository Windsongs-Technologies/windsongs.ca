'use client';

import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-secondary">Windsongs</span>
          <a href="#contact" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
            Contact
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Custom Software Engineering
            <span className="block text-primary">Powered by AI</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-8">
            We help clients leverage software technology to solve hard problems—faster. 
            Building intelligent solutions through AI, automation, and innovative design.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                Windsongs is a Toronto-based custom software engineering company founded by an experienced software architect with 25+ years of industry expertise.
              </p>
              <p className="text-lg text-slate-600">
                We specialize in building solutions that leverage AI to arrive quickly at results and solve complex challenges across business automation, product development, and emerging technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Our Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-slate-600">Fullstack development—UX/UI to APIs and databases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-slate-600">Systems design from desktop apps to enterprise platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-slate-600">AI & machine learning integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-slate-600">Game and graphics design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-slate-600">Workflow automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">AI Solutions</h3>
              <p className="text-slate-600">
                Harness the power of artificial intelligence to automate processes, gain insights, and build intelligent products that evolve with your needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Business Automation</h3>
              <p className="text-slate-600">
                Streamline operations and eliminate manual tasks with custom automation solutions tailored to your workflows.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Custom Development</h3>
              <p className="text-slate-600">
                From concept to deployment—build bespoke software applications, APIs, and systems designed precisely for your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-300 mb-8">
                Ready to transform your ideas into reality? We&apos;d love to hear about your project and explore how we can help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@windsongs.ca" className="text-slate-300 hover:text-primary transition-colors">
                    info@windsongs.ca
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-300">Toronto, Canada</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                  honeypot: formData.get('website'),
                };
                setErrorMessage('');
                setStatus('loading');
                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  const result = await res.json();
                  if (res.ok) {
                    setStatus('success');
                  } else {
                    setStatus('error');
                    setErrorMessage(result.error || 'Something went wrong.');
                  }
                } catch (e) {
                  setStatus('error');
                  setErrorMessage(e instanceof Error ? e.message : 'Something went wrong.');
                }
              }}>
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                {status === 'success' ? (
                  <div className="p-4 bg-green-500/20 text-green-300 rounded-lg text-center">
                    Thank you! Your message has been sent.
                  </div>
                ) : status === 'error' ? (
                  <div className="p-4 bg-red-500/20 text-red-300 rounded-lg text-center">
                    {errorMessage || 'Something went wrong. Please try again or email us directly.'}
                  </div>
                ) : (
                  <button type="submit" disabled={status === 'loading'} className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm">© {new Date().getFullYear()} Windsongs. All rights reserved.</span>
          <span className="text-sm">Custom Software Engineering & AI Solutions</span>
        </div>
      </footer>
    </main>
  );
}
