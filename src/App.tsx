/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';

const personalInfo = {
  name: "Felipe De la Torre",
  role: "Full-Stack Engineer & Designer",
  location: "San Francisco, CA",
  email: "hello@example.com",
  about: "I build crafted, performant, and accessible web experiences. Passionate about bridging the gap between design and engineering.",
  skills: [
    "TypeScript", "React", "Node.js", "Next.js",
    "Tailwind CSS", "PostgreSQL", "GraphQL", "Figma"
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "TechNova",
      period: "2021 - Present",
      description: "Leading the frontend architecture for a high-traffic SaaS platform. Improved performance by 40% and established a comprehensive design system."
    },
    {
      role: "Full-Stack Developer",
      company: "Creative Solutions",
      period: "2018 - 2021",
      description: "Developed and maintained multiple client projects using React and Node.js. Mentored junior developers and implemented CI/CD pipelines."
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      period: "2014 - 2018"
    }
  ],
  projects: [
    {
      name: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics.",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      name: "Task Management App",
      description: "A collaborative task management tool with real-time updates and offline support.",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      link: "#"
    }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-zinc-50">
      <main className="max-w-3xl mx-auto px-6 py-20 md:py-32 space-y-24">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-zinc-500 font-medium">
              {personalInfo.role}
            </p>
          </div>

          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
            {personalInfo.about}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
            <Briefcase className="w-5 h-5" />
            <h2>Experience</h2>
          </div>
          <div className="space-y-12">
            {personalInfo.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-[-3rem] last:before:bottom-0 before:w-px before:bg-zinc-200">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-400 ring-4 ring-zinc-50" />
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-lg font-medium text-zinc-900">{exp.role}</h3>
                    <span className="text-sm text-zinc-500 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-zinc-600 font-medium">{exp.company}</p>
                  <p className="text-zinc-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
            <Code2 className="w-5 h-5" />
            <h2>Selected Projects</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {personalInfo.projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group block p-6 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-sm text-zinc-600 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
            <Code2 className="w-5 h-5" />
            <h2>Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {personalInfo.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
            <GraduationCap className="w-5 h-5" />
            <h2>Education</h2>
          </div>
          <div className="space-y-6">
            {personalInfo.education.map((edu, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-6 bg-zinc-100/50 rounded-2xl">
                <div>
                  <h3 className="font-medium text-zinc-900">{edu.degree}</h3>
                  <p className="text-zinc-600">{edu.school}</p>
                </div>
                <span className="text-sm text-zinc-500 font-mono">{edu.period}</span>
              </div>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}
