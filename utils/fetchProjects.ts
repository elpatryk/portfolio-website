import { Project } from "@/typings";

export const fetchProjects = async () => {
  const res = await fetch(`http://localhost:3000/api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
