import React from 'react';
import { PenTool, Cpu, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Cpu className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Engineering",
      desc: "3D & Circuit Design, Mechanisms"
    },
    {
      icon: <PenTool className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Development",
      desc: "Python, React, Godot, Docker"
    },
    {
      icon: <Users className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Volunteering",
      desc: "Maakleerplek & HDC Student Council"
    },
    {
      icon: <Award className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Sports",
      desc: "Competitive Badminton at Dijlevallei"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
            I am a highly motivated student currently in my 2nd year of the Bachelor in Industrial Sciences at KU Leuven (Groep T). 
            Beyond my studies, I am actively involved as a volunteer at Maakleerplek where I manage inventory, and I play competitive badminton. 
            I combine technical engineering skills with creativity and software development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 transition-colors">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;