import { Experience } from "@/typings";

export const fetchExperience = async () => {
  const res = await fetch(`http://localhost:3000/api/getExperiences`);

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
