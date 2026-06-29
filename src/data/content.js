// ============================================
// CENTRALIZED CONTENT DATA
// Edit this file to update all portfolio content
// ============================================

import {
  Brain,
  Code2,
  Database,
  Globe,
  Cpu,
  GitBranch,
  Terminal,
  BarChart3,
  Layers,
  Box,
  Palette,
  Sparkles,
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Shield
} from 'lucide-react';

// ---------- Personal Info ----------
export const personalInfo = {
  name: 'Shreya Patil',
  title: 'AIML Student',
  tagline: 'Building intelligent solutions at the intersection of AI, Machine Learning & Software Engineering.',
  email: 'shreyapatil4871@gmail.com',
  github: 'https://github.com/SHREYA404-max',
  linkedin: 'https://linkedin.com/in/shreyapatil',
  resumeUrl: '/resume.pdf',
};

// ---------- About ----------
export const aboutData = {
  bio: `I'm Shreya Patil, a second-year Artificial Intelligence & Machine Learning student passionate about technology, AI, and software development. I'm currently learning Python and AI-assisted game development while continuously improving my skills through online courses and hackathons. I enjoy building innovative projects and exploring emerging technologies.`,
};

// ---------- Skills ----------
export const skillsData = [
  {
    category: 'Computer Skills',
    skills: [
      { name: 'Python & Data Science', icon: Code2 },
      { name: 'Basic Machine Learning', icon: Brain },
      { name: 'Basic Game Development', icon: Cpu },
      { name: 'SQL & Databases', icon: Database },
    ],
  },
  {
    category: 'General Skills',
    skills: [
      { name: 'Leadership', icon: Award },
      { name: 'Quick Learner', icon: Sparkles },
      { name: 'Management', icon: Trophy },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Hindi', icon: Globe },
      { name: 'English', icon: Globe },
    ],
  },
];

// ---------- Tech Stack (used to build this site) ----------
export const techStackData = [
  { name: 'React', icon: Layers },
  { name: 'Vite', icon: Sparkles },
  { name: 'Framer Motion', icon: Box },
  { name: 'Lucide Icons', icon: Shield },
  { name: 'CSS3', icon: Code2 },
];

// ---------- Credentials: Education ----------
export const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Acropolis Institute of Technology and Research',
    year: '2023 – 2027',
    description: 'AIML career, in progress.',
  },
  {
    degree: 'Higher Secondary Schooling',
    institution: 'Brilliant Academy',
    year: '2023 – 2024',
    description: 'Focused on high school curriculum and foundational science subjects.',
  },
  {
    degree: 'Secondary Schooling',
    institution: 'St. Joseph\'s School',
    year: '2010 – 2023',
    description: 'Foundational education and early academic achievements.',
  },
];

// ---------- Credentials: Certifications ----------
export const certificationsData = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera – Stanford',
    year: '2024',
    verifyLink: '#',
  },
  {
    name: 'Deep Learning with TensorFlow',
    issuer: 'Google',
    year: '2024',
    verifyLink: '#',
  },
  {
    name: 'Python for Data Science',
    issuer: 'IBM',
    year: '2023',
    verifyLink: '#',
  },
];

// ---------- Credentials: Achievements ----------
export const achievementsData = [
  { text: 'Winner — National Level AI Hackathon 2024', icon: Trophy },
  { text: 'Published research paper on Computer Vision applications', icon: Award },
  { text: 'Top 10% — Kaggle Data Science Competition', icon: Medal },
  { text: 'Dean\'s List — Academic Excellence Award', icon: GraduationCap },
];

// ---------- Navigation Links ----------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];
