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

export async function getProjectsAndTech() {
  const response = await fetch(`${baseUrl}public/index`, {
    cache: "no-store",
  });
  const result: ApiResponse = await response.json();

  const techFromApi = await fetch(`${baseUrl}public/tech`, {
    cache: "no-store",
  });
  const resultTech: ApiResponse = await techFromApi.json();

  return {
    projects: result.data || [],
    techs: resultTech.data || []
  };
}
