import Container from "./components/Container"
import About from "./components/sections/About"
import HeroSection from "./components/sections/HeroSection"
import Projects from "./components/sections/Projects"

export default function Home() {
  return (     
    <main>
      <Container>

        <section id="home" className="snap-center">
          <HeroSection />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="projects" className="snap-center">
          <Projects/>
        </section>

      </Container>
    </main>
  )
}
