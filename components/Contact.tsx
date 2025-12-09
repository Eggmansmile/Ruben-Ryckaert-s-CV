import React from 'react';
import { Mail, Phone, Globe, Send, MapPin } from 'lucide-react';
import { CONFIG } from '../config';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto transition-colors">
            Whether you have a question about my projects, want to collaborate, or just want to say hi. 
            Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">Email</h3>
                <a href={`mailto:${CONFIG.email}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">{CONFIG.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">Phone</h3>
                <p className="text-slate-600 dark:text-slate-300 transition-colors">{CONFIG.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 transition-colors">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">Website</h3>
                <a href={`https://${CONFIG.website}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{CONFIG.website}</a>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">Location</h3>
                <p className="text-slate-600 dark:text-slate-300 transition-colors">{CONFIG.location}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={`Hello ${CONFIG.name.split(' ')[0]}...`}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;