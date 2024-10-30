"use client";

import React, { useState, useEffect } from "react";
import MyFooter from "@/app/component/footer";
import MyHeader from "@/app/component/header";
import { Project, Tech } from "@/app/project/projectList";
import { getProjectsAndTech } from "@/app/project/projectList";
import Image from "next/image";
import images from "@/public/images";

// interface ProfileWebsiteProps {
//   section1Width?: string;
//   section2Width?: string;
//   section3Width?: string;
// }

export default function ProfileWebsite(
//   {
//   section1Width = "w-1/5", // Default width
//   section2Width = "w-2/5",
//   section3Width = "w-2/5",
// }: ProfileWebsiteProps
) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [techs, setTechs] = useState<Tech[]>([]);
  const [selectedSection, setSelectedSection] = useState("project");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjectsAndTech();
      setProjects(data.projects);
      setTechs(data.techs);
      setSelectedProject(data.projects[0] || null); // Mengatur default project ke projects[0]
    }
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-black-500 to-black-800 text-white flex flex-col">
      <MyHeader />
      <div className="container mx-auto px-4 py-4 animate-fade-in flex-grow flex gap-2">
        
        {/* Section 1 */}
        {/* <div className={`${section1Width} bg-zinc-800 rounded-lg p-6 max-h-[73vh]`}> */}
        <div className={`w-1/5 bg-zinc-800 rounded-lg p-6 max-h-[73vh]`}>
          <h1 className="text-2xl font-bold mb-1">Hi,</h1>
          <p className="text-white mb-4">Welcome to my personal website</p>
          <div className="grid grid-cols-1 gap-4">
            <div
              className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer"
              onClick={() => setSelectedSection("skill")}
            >
              <h4 className="text-xl font-semibold mb-2">Skill</h4>
            </div>
            <div
              className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer"
              onClick={() => setSelectedSection("project")}
            >
              <h4 className="text-xl font-semibold mb-2">Project</h4>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h4 className="text-xl font-semibold mb-2">Profile</h4>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        {/* <div className={`${section2Width} bg-zinc-800 rounded-lg p-6 max-h-[73vh] overflow-y-auto custom-scrollbar`}> */}
        <div className={`"w-2/5" bg-zinc-800 rounded-lg p-6 max-h-[73vh] overflow-y-auto custom-scrollbar`}>
          <h1 className="text-2xl font-bold mb-4">
            {selectedSection === "skill" ? "Skills" : "Projects"}
          </h1>
          <div className="grid grid-cols-1 gap-4">
            {selectedSection === "skill"
              ? techs.map((tech: Tech) => (
                  <div
                    key={tech.id}
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                  >
                    <h4 className="text-xl font-semibold mb-1">
                      {tech.name}
                    </h4>
                    <p
                      className={`mb-1 ${
                        tech.status === "Advance"
                          ? "text-green-300"
                          : tech.status === "Intermediate"
                          ? "text-yellow-300"
                          : "text-red-300"
                      }`}
                    >
                      {tech.status}
                    </p>
                  </div>
                ))
              : projects.map((project: Project) => (
                  <div
                    key={project.id}
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <h4 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h4>
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

        {/* Section 3 */}
        {/* <div className={`${section3Width} bg-zinc-800 rounded-lg p-6 max-h-[73vh] overflow-y-auto custom-scrollbar`}> */}
        <div className={`"w-2/5" bg-zinc-800 rounded-lg p-6 max-h-[73vh] overflow-y-auto custom-scrollbar`}>
          <h1 className="text-2xl font-bold mb-2">Detail Project</h1>
          {selectedProject ? (
            <>
              <h2 className="text-xl text-white mb-4">
                {selectedProject.name}
              </h2>
              <div className="w-full h-auto rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src={images.profile}
                  alt={`Gambar dari proyek ${selectedProject.name}`}
                  width={400}
                  height={400}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl text-white mb-4">About Project</h2>
              <p className="text-gray-300 mb-8 text-justify">
                {selectedProject.desc}
              </p>
              <div className="bg-zinc-700 rounded-lg p-6">
                <h2 className="text-xl text-white mb-4">Tech Use</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techs_project.map((tech) => (
                    <span
                      key={tech.id}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech.techs.name}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-400">
              Pilih sebuah project untuk melihat detailnya.
            </p>
          )}
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
