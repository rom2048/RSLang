import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import Advantage from '../../components/Advantage/Advantage'

const Home = () => {
  return (
    <main>
      <Hero />
      <Section title='Преимущества'>
        <Advantage />
      </Section>

      <Section title='О нас'>
        <About />
      </Section>
    </main>
  )
}

export default Home
