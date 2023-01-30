/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import type { GetStaticProps } from "next";
import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { useRouter } from "next/router";
import { useEffect } from "react";
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name}</title>
      </Head>
      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
        {/* About */}
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className=" snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://www.i2symbol.com/images/text-symbols/h-symbol.png"
              alt=""
              width="10"
              height="10"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
