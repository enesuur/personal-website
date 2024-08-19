import Head from "next/head";
import IntroductionSection from "@/section/introduction/IntroductionSection";
import MainLayout from "@/layout/MainLayout";
import BackgroundSection from "@/section/background/BackgroundSection";
import SkillSection from "@/section/skills/SkillSection";
import ProjectSection from "@/section/projects/ProjectSection";
import ContactSection from "@/section/contact/ContactSection";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Enes Uğur | Full Stack Engineer</title>
        <meta
          name="description"
          content="Explore my projects, skills, and background in web development. Let's connect and create something amazing!"
        />
        <meta
          name="keywords"
          content="portfolio, web development, skills, projects, frontend, backend,enes uğur,full stack engineer"
        />
        <meta name="author" content="Enes Uğur" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://enesugur.cloud" />
      </Head>
      <MainLayout>
        <IntroductionSection />
        <BackgroundSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </MainLayout>
    </>
  );
};

export default Home;
