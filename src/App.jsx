import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import {
  Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink,
  Code, Database, Globe, Server, Eye, Calendar, Award, User,
  GraduationCap, Briefcase, Trophy, MessageCircle, ChevronUp
} from 'lucide-react';

/* --- images --- */
import cartoonAvatar from './assets/cartoon-avatar.png';
import project1 from './assets/WEB.png';
import project2 from './assets/project-2.jpg';
import project3 from './assets/project-3.jpg';

/* --- quick fade-in-up CSS (drop in index.css or <style>) ---
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp { animation: fadeInUp .6s ease forwards; }
----------------------------------------------------------- */

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* ----------  TYPE-WRITER HELPER  ---------- */
  const TypeWriter = () => {
    const words = ['AI & ML', 'Frontend Development', 'Computer Vision'];
    const [idx, setIdx] = React.useState(0);
    const [pos, setPos] = React.useState(0);
    const [forward, setForward] = React.useState(true);

    React.useEffect(() => {
      const typingSpeed = 80;
      const deletingSpeed = 40;
      const pauseAfterWord = 300;

      const t = setTimeout(() => {
        if (forward) {
          if (pos === words[idx].length) {
            setTimeout(() => setForward(false), pauseAfterWord);
          } else {
            setPos(p => p + 1);
          }
        } else {
          if (pos === 0) {
            setIdx(i => (i + 1) % words.length);
            setForward(true);
          } else {
            setPos(p => p - 1);
          }
        }
      }, forward ? typingSpeed : deletingSpeed);

      return () => clearTimeout(t);
    }, [idx, pos, forward]);

    return (
      <span className="text-gray-900 font-bold">
        {words[idx].substring(0, pos)}
        <span className="animate-pulse">|</span>
      </span>
    );
  };

  /* ----------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'awards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: 'React.js', level: 70, icon: <Code className="w-8 h-8" />, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, icon: <Code className="w-8 h-8" />, color: '#F7DF1E' },
    { name: 'Python', level: 85, icon: <Code className="w-8 h-8" />, color: '#3776AB' },
    { name: 'C/C++', level: 80, icon: <Code className="w-8 h-8" />, color: '#00599C' },
    { name: 'OpenCV', level: 85, icon: <Eye className="w-8 h-8" />, color: '#5C3EE8' },
    { name: 'HTML/CSS', level: 95, icon: <Globe className="w-8 h-8" />, color: '#E34F26' },
    { name: 'Raspberry Pi', level: 80, icon: <Server className="w-8 h-8" />, color: '#C51A4A' },
    { name: 'AI/ML Tools', level: 75, icon: <Database className="w-8 h-8" />, color: '#FF6B6B' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Eye Tracking System',
      description: 'Real-time eye-movement detection & gaze tracking with Raspberry Pi 4/5, OpenCV and MediaPipe.',
      image: project3,
      technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'Computer Vision', 'MediaPipe'],
      liveUrl: 'https://eye-tracking-demo-aman.netlify.app/',   // <- LIVE DEMO
      githubUrl: 'https://github.com/Developer007-web/Eye_Tracking_System'
    },
    {
      id: 2,
      title: 'Slot Booking Web App',
      description: 'Responsive appointment-scheduling system developed during AIIMS internship.',
      image: project1,
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://moonlit-mousse-88eca8.netlify.app/', githubUrl: 'https://github.com/Developer007-web/NEURO-WEBSITE'
    },
    {   
      id: 3,
      title: 'Note Web App',
      description: 'Modern web interfaces designed with AI-powered tools like Figma AI and GitHub Copilot.',
      image: project2,
      technologies: ['React.js', 'Figma AI', 'GitHub Copilot', 'Responsive Design'],
      liveUrl: 'https://advanced-notes-app.netlify.app/', githubUrl: 'https://github.com/Developer007-web/AI-based-Note-Web'
    }
  ];

  const experiences = [
    {
      id: 1,
      title: 'Research Intern',
      company: 'AIIMS New Delhi',
      period: 'June 2025 (2 Months)',
      description: 'Built real-time eye-tracking system with Raspberry Pi & OpenCV for neurology research; deployed responsive slot-booking web app.',
      department: 'Neurology Department'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'ResearchX',
      period: '2024 - Present',
      description: 'Crafting responsive UIs in React for research-focused dashboards.'
    }
  ];

  const education = {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    university: 'Chandigarh University, Punjab',
    period: 'Expected 2026',
    cgpa: '6.96'
  };

  const achievements = [
    {
      title: 'Vice President – Cyber Security Club',
      organization: 'Chandigarh University',
      description: 'Led workshops & mentored juniors on network security and threat analysis.'
    },
    {
      title: 'College-Level Debate Winner',
      organization: 'Chandigarh University',
      description: 'Secured victories in multiple inter-college debate competitions.'
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Home', color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'about', label: 'About', color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'projects', label: 'Projects', color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'skills', label: 'Skills', color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'experience', label: 'Experience', color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'education', label: 'Education', color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'awards', label: 'Awards', color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'contact', label: 'Contact', color: 'bg-blue-600 hover:bg-blue-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      {/* geometric background */}
      <div className="fixed inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#e5e7eb" opacity="0.5" />
              <circle cx="80" cy="40" r="2" fill="#e5e7eb" opacity="0.5" />
              <circle cx="50" cy="80" r="2" fill="#e5e7eb" opacity="0.5" />
              <line x1="20" y1="20" x2="80" y2="40" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
              <line x1="80" y1="40" x2="50" y2="80" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
              <line x1="50" y1="80" x2="20" y2="20" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      {/* navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold text-lg">
                Aman Pratap Singh
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${item.color} text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${activeSection === item.id ? 'scale-105 shadow-lg' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Menu</button>
            </div>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Hi There,<br />
                I'm <span className="text-blue-600">Aman</span><br />
                <span className="text-blue-600">Pratap Singh</span>
              </h1>
              <p className="text-2xl text-gray-700 mb-8">
                I Am Into <TypeWriter />
              </p>
              <Button onClick={() => scrollToSection('about')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                About Me
              </Button>
              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/Developer007-web" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><Github className="w-6 h-6 text-white" /></a>
                <a href="https://www.linkedin.com/in/aman-pratap-singh-449a61251/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><Linkedin className="w-6 h-6 text-white" /></a>
                <a href="https://www.instagram.com/amannnn.who/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><Instagram className="w-6 h-6 text-white" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"><ExternalLink className="w-6 h-6 text-white" /></a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-200">
                <img src={cartoonAvatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4"><User className="inline-block w-8 h-8 mr-3" />About <span className="text-blue-600">Me</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center"><img src={cartoonAvatar} alt="Aman" className="w-64 h-64 rounded-2xl shadow-2xl" /></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">I'm Aman</h3>
              <h4 className="text-xl text-gray-600 mb-4">Frontend-focused developer & AI-tool power-user</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I’m a frontend-focused developer and an AI tool power-user, dedicated to crafting seamless, responsive, and visually engaging web experiences. By blending cutting-edge design with smart automation, I help businesses turn ideas into high-performance digital products. Let’s build the future of the web — faster, smarter, and beautifully.
              </p>
              <div className="space-y-3">
                <div className="flex items-center"><Mail className="w-5 h-5 text-blue-600 mr-3" /><span className="text-blue-600">amanprataps218@gmail.com</span></div>
                <div className="flex items-center"><MapPin className="w-5 h-5 text-blue-600 mr-3" /><span className="text-blue-600">New Delhi, India – 247667</span></div>
              </div>
              <a href="https://drive.google.com/file/d/1cl5YDm2TzAEy9GRdKw5PLVmNmOaGk4CZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">Resume</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"><Briefcase className="inline-block w-8 h-8 mr-3" />Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Card
                key={p.id}
                className="hover:scale-105 transition-transform duration-300 shadow-lg animate-fadeInUp"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.technologies.map((t, j) => <Badge key={j} variant="secondary" className="text-xs">{t}</Badge>)}
                  </div>
                  <div className="flex space-x-3">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full"><ExternalLink className="w-4 h-4 mr-2" />Live</Button>
                    </a>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full"><Github className="w-4 h-4 mr-2" />Code</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4"><Code className="inline-block w-8 h-8 mr-3" />Skills & <span className="text-blue-400">Abilities</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-fadeInUp"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex justify-center mb-4 text-blue-400">{skill.icon}</div>
                <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
                <span className="text-gray-300 text-sm mt-2 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* experience */}
      <section id="experience" className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"><Briefcase className="inline-block w-8 h-8 mr-3" />Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map(exp => (
              <Card key={exp.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                      {exp.department && <p className="text-gray-600">{exp.department}</p>}
                    </div>
                    <div className="text-gray-500 font-medium">{exp.period}</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* education */}
      <section id="education" className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"><GraduationCap className="inline-block w-8 h-8 mr-3" />Education</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                <p className="text-xl mb-4">{education.field}</p>
                <p className="text-lg mb-4">{education.university}</p>
                <p className="text-lg mb-4">{education.period}</p>
                <div className="bg-white/20 rounded-lg px-4 py-2 inline-block"><span className="font-semibold">Current CGPA: {education.cgpa}</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* awards */}
      <section id="awards" className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"><Trophy className="inline-block w-8 h-8 mr-3" />Awards & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((a, i) => (
              <Card key={i} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 rounded-full p-3"><Award className="w-6 h-6 text-white" /></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{a.title}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{a.organization}</p>
                      <p className="text-gray-600">{a.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4"><MessageCircle className="inline-block w-8 h-8 mr-3" />Get In Touch</h2>
            <p className="text-xl text-gray-300">Let's discuss your next project or just say hello!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-lg p-3"><Mail className="w-6 h-6 text-white" /></div>
                    <div><p className="text-white font-semibold">Email</p><p className="text-gray-300">amanprataps218@gmail.com</p></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-lg p-3"><Phone className="w-6 h-6 text-white" /></div>
                    <div><p className="text-white font-semibold">Phone</p><p className="text-gray-300">+91 8595964818</p></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-lg p-3"><MapPin className="w-6 h-6 text-white" /></div>
                    <div><p className="text-white font-semibold">Location</p><p className="text-gray-300">New Delhi, India</p></div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Developer007-web" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:scale-110 transition-transform"><Github className="w-6 h-6 text-white" /></a>
                    <a href="https://www.linkedin.com/in/aman-pratap-singh-449a61251/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-3 rounded-lg hover:scale-110 transition-transform"><Linkedin className="w-6 h-6 text-white" /></a>
                    <a href="https://www.instagram.com/amannnn.who/" target="_blank" rel="noopener noreferrer" className="bg-gray-600 p-3 rounded-lg hover:scale-110 transition-transform"><Instagram className="w-6 h-6 text-white" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
              <p className="text-gray-600 mb-6">I'll get back to you as soon as possible</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={5} />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-gray-800 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Aman Pratap Singh. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      {/* scroll-to-top */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50" aria-label="Scroll to top">
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App; 