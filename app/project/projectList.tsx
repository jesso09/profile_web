import React, { useEffect, useState } from "react";
import { baseUrl } from "@/utils/env";

export type Project = {
  id: number;
  name: string;
  desc: string;
  status: string;
  created_at: Date | null;
  updated_at: Date | null;
  techs_project: TechsProject[];
  project_images: ProjectImage[];
};

export type ProjectImage = {
  id: number;
  project_id?: number;
  name: string;
  status: string;
  created_at: Date | null;
  updated_at: Date | null;
};

export type TechsProject = {
  id: number;
  project_id: number;
  techs_id: number;
  created_at: Date | null;
  updated_at: Date | null;
  techs: ProjectImage;
};

export type Tech = {
  id: number;
  name: string;
  status: string;
  created_at: Date | null;
  updated_at: Date | null;
};

export type ApiResponse = {
  data: Project[];
  message: string;
  status: number;
};

const GetProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${baseUrl}public/index`);
        const result: ApiResponse = await response.json();
        setProjects(result.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return projects;
};

export default GetProjectList;
