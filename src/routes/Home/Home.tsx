import About from '../../components/About/About'
import CardList from '../../components/CardList/CardList'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import Advantage from '../../components/Advantage/Advantage'
import { useAppSelector, useAppDispatch } from '../../store/hooks'

import { getData, selectWords } from '../Words/Words'
import { useEffect } from 'react'

const Home = () => {
  const { loading, words } = useAppSelector(selectWords)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <main>
      <Hero />
      <Section title='Преимущества'>
        <Advantage />
      </Section>
      <Section title='Список слов'>
        <CardList />
      </Section>
      <Section title='О нас'>
        <About />
      </Section>
    </main>
  )
}

export default Home
