import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const ProfileWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-8">
            <img 
              // src="/api/placeholder/160/160" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQU0L4wGZj3h1LdIJqJMxUGxvZpY2UID5yg&s" 
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Gede Bagus Jyestha Permana</h1>
          <h2 className="text-xl text-gray-400 mb-6">Junior Developer</h2>
          <p className="max-w-2xl text-gray-300 mb-8">
            Passionate developer with expertise in React, Next.js, and Node.js. 
            I love creating elegant solutions to complex problems and building 
            user-friendly applications that make a difference.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-center mb-8">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {[
            "Flutter", "Next.js", "Laravel",
            "Figma", "MySQL",
          ].map((skill) => (
            <div 
              key={skill}
              className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Gofit",
              description: "A modern e-commerce solution built with Next.js and Stripe",
              tech: ["Laravel", "MySQL", "Vue.js", "Flutter"],
            },
            {
              title: "Hastakala Bali",
              description: "Collaborative task management tool with real-time updates",
              tech: ["Flutter"]
            },
            {
              title: "BSI Bank Sampah",
              description: "Personal portfolio website with dark mode and animations",
              tech: ["Laravel", "MySQL", "Flutter"]
            },
            {
              title: "Lab Poltekkes",
              description: "Personal portfolio website with dark mode and animations",
              tech: ["Laravel", "MySQL", "Flutter"]
            },
            {
              title: "VisiVista",
              description: "Personal portfolio website with dark mode and animations",
              tech: ["Laravel", "MySQL", "Flutter"]
            },
            {
              title: "Inuneko Care",
              description: "Personal portfolio website with dark mode and animations",
              tech: ["Laravel", "MySQL", "Flutter"]
            },
            {
              title: "SIPADU",
              description: "Personal portfolio website with dark mode and animations",
              tech: ["Flutter"]
            },
          ].map((project) => (
            <div 
              key={project.title}
              className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
            >
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            I'm currently open for freelance projects and full-time positions. 
            Feel free to reach out if you'd like to work together!
          </p>
          <a 
            href="mailto:jyestha47@gmail.com"
            className="inline-block px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileWebsite;