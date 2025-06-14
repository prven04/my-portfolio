// Example: src/app/page.tsx
import About from "@/components/About/about";
import Skills from "@/components/Skills/skills";
import Projects from "@/components/Projects/projects";
import Contact from "@/components/Contact/contact";
import Welcome from "@/components/Welcome/welcome";

export default function HomePage() {
  return (
    <>
      <div>
        <section id="welcome" className="py-6 bg-gray-100">
          <Welcome />
        </section>
        <section id="about" className="py-6">
          <About />
        </section>
        <section id="skills" className="py-6 bg-gray-100">
          <Skills />
        </section>
        <section id="projects" className="py-6">
          <Projects />
        </section>
        <section id="contact" className="py-6 bg-blue-600">
          <Contact />
        </section>
      </div>
    </>
  );
}
