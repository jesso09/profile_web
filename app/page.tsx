import React from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import images from "@/public/images";

type Project = {
  id: number;
  name: string;
  desc: string;
  status: string;
  created_at: Date | null;
  updated_at: Date | null;
  techs_project: TechsProject[];
  project_images: ProjectImage[];
};

type ProjectImage = {
  id: number;
  project_id?: number;
  name: string;
  status: string;
  created_at: Date | null;
  updated_at: Date | null;
};

type TechsProject = {
  id: number;
  project_id: number;
  techs_id: number;
  created_at: Date | null;
  updated_at: Date | null;
  techs: ProjectImage;
};

type ApiResponse = {
  data: Project[];
  message: string;
  status: number;
};

export default async function ProfileWebsite() {
  const response = await fetch("http://192.168.40.193:8000/api/public/index");
  const result: ApiResponse = await response.json();
  
  // Mengambil array projects dari response
  const projects = result.data || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-8 relative">
            <Image
              src={images.profile}
              alt="Profile Picture"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">
          Lorem ipsum dolor sit amet,
          </h1>
          <h2 className="text-xl text-gray-400 mb-6">Lorem ipsum dolor sit amet,</h2>
          <p className="max-w-2xl text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex space-x-4">
            <a
              href=""
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-center mb-8">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {["Flutter", "Next.js", "Laravel", "Figma", "MySQL"].map((skill) => (
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
        <h3 className="text-2xl font-bold text-center mb-8">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
            >
              <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs_project.map((tech) => (
                  <span
                    key={tech.id}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {tech.techs.name}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
}