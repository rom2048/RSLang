import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProviders } from '../../utils/test-utils'
import Navigation from './Navigation'

test('Navigation render', () => {
  renderWithProviders(
    <MemoryRouter initialEntries={['/']}>
      <Navigation />
    </MemoryRouter>,
  )
  const register = screen.getByText(/register/i)
  expect(register).toBeInTheDocument()
})

test('Navigation mobile render', () => {
  renderWithProviders(
    <MemoryRouter initialEntries={['/']}>
      <Navigation />
    </MemoryRouter>,
    {
      preloadedState: {},
    },
  )
  const register = screen.getByTestId('mobileLink')
  expect(register).toBeInTheDocument()
})
