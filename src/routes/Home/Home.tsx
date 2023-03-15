import About from '../../components/About/About'
import CardList from '../../components/CardList/CardList'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { getData, selectWords } from '../../app/Words/Words'
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
      <Section title='Card List'>
        <CardList />
      </Section>
      <Section title='About'>
        <About />
      </Section>
    </main>
  )
}

export default Home
