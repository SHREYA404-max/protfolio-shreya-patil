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
  email: 'shreya.patil@example.com',
  github: 'https://github.com/shreyapatil',
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
    category: 'Languages',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'JavaScript', icon: Terminal },
      { name: 'Java', icon: Code2 },
      { name: 'SQL', icon: Database },
      { name: 'C/C++', icon: Code2 },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'TensorFlow', icon: Brain },
      { name: 'PyTorch', icon: Cpu },
      { name: 'Scikit-Learn', icon: BarChart3 },
      { name: 'OpenCV', icon: Sparkles },
      { name: 'NLP', icon: Brain },
    ],
  },
  {
    category: 'Frameworks & Tools',
    skills: [
      { name: 'React', icon: Layers },
      { name: 'Node.js', icon: Globe },
      { name: 'Flask', icon: Box },
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Figma', icon: Palette },
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
    institution: 'Your University',
    year: '2023 – 2027',
    description: 'Focused on machine learning, deep learning, computer vision, and natural language processing.',
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'Your School',
    year: '2021 – 2023',
    description: 'Science stream with Computer Science.',
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
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];
