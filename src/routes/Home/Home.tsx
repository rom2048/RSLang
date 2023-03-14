import About from '../../components/About/About'
import CardList from '../../components/CardList/CardList'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'

const Home = () => {
  return (
    <main>
      <Hero />
      <Section title='Card List'>
        <CardList></CardList>
      </Section>
      <Section title='About'>
        <About />
      </Section>
    </main>
  )
}

export default Home
