import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Terminal, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import { CONFIG } from '../config';
import { CONTACT_MESSAGES, ANIMATION_DURATIONS } from '../constants';
import DecryptedText from './DecryptedText';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/send-email';
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send email');

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), ANIMATION_DURATIONS.SUCCESS_MESSAGE_CLEAR);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred');
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto mb-16">
          {/* Quick Links (Footer Style) */}
          <div className="lg:w-1/3 space-y-6">
            <div>
              <h2 className="text-xl font-mono font-bold text-white mb-4">
                &lt;<DecryptedText text="Contact_Uplink" /> /&gt;
              </h2>
              <p className="text-sm text-slate-400 mb-6 max-w-xs">
                Open for collaboration, engineering projects, and full-stack development opportunities.
              </p>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <a href={`mailto:${CONFIG.email}`} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail size={16} className="text-blue-500" />
                <span>{CONFIG.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={16} className="text-blue-500" />
                <span>{CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-blue-500" />
                <span>{CONFIG.location}</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={CONFIG.social.github} className="p-2 bg-slate-800 rounded hover:bg-slate-700 transition-colors text-white" aria-label="Github">
                <Github size={20} />
              </a>
              <a href={CONFIG.social.linkedin} className="p-2 bg-slate-800 rounded hover:bg-slate-700 transition-colors text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={`https://${CONFIG.website}`} className="p-2 bg-slate-800 rounded hover:bg-slate-700 transition-colors text-white" aria-label="Website">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Compact Form */}
          <div className="lg:w-2/3 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
             {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-green-400">
                  <CheckCircle size={48} className="mb-4" />
                  <h3 className="font-mono font-bold text-lg">MESSAGE RECEIVED</h3>
                  <p className="text-sm opacity-80 mt-2">I will respond shortly.</p>
                </div>
             ) : (
              <form className="space-y-4 font-mono text-sm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" id="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded text-white focus:border-blue-500 outline-none transition-colors"
                    placeholder="NAME"
                  />
                  <input 
                    type="email" id="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded text-white focus:border-blue-500 outline-none transition-colors"
                    placeholder="EMAIL"
                  />
                </div>
                <input 
                  type="text" id="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded text-white focus:border-blue-500 outline-none transition-colors"
                  placeholder="SUBJECT"
                />
                <textarea 
                  id="message" rows={3} value={formData.message} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded text-white focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="MESSAGE..."
                ></textarea>
                
                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-xs">
                    <AlertCircle size={14} /> <span>{errorMessage}</span>
                  </div>
                )}

                <button 
                  type="submit" disabled={formStatus === 'loading'}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {formStatus === 'loading' ? 'SENDING...' : 'SEND MESSAGE'} <Terminal size={14} />
                </button>
              </form>
             )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} {CONFIG.name}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span>SYSTEM_ONLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;