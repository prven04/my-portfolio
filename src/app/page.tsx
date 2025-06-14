import About from "@/components/About/about";
import Skills from "@/components/Skills/skills";
import Projects from "@/components/Projects/projects";
import Contact from "@/components/Contact/contact";
import Welcome from "@/components/Welcome/welcome";

export default function HomePage() {
  return (
    <div className="pt-[40px]">
      <section id="welcome" className="py-8 my-2 bg-gray-100 scroll-mt-[40px]">
        <Welcome />
      </section>
      <section id="about" className="py-8 scroll-mt-[40px]">
        <About />
      </section>
      <section id="skills" className="py-8 bg-gray-100 scroll-mt-[40px]">
        <Skills />
      </section>
      <section id="projects" className="py-8 scroll-mt-[40px]">
        <Projects />
      </section>
      <section id="contact" className="py-8 bg-blue-600 scroll-mt-[40px]">
        <Contact />
      </section>
    </div>
  );
}
