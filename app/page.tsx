import Container from "./components/Container"
import About from "./components/sections/About"
import Footer from "./components/sections/Footer"
import HeroSection from "./components/sections/HeroSection"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"

export default function Home() {
  return (     
    <main>
      <Container>
        <HeroSection />
        <About />
        <Skills/>
        <Projects/>
      </Container>
    </main>
  )
}
