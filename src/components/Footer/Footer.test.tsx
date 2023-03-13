import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProviders } from '../../utils/test-utils'
import Footer from './Footer'

test('Footer render', () => {
  renderWithProviders(
    <MemoryRouter initialEntries={['/']}>
      <Footer />
    </MemoryRouter>,
  )
  const year = screen.getByText(/2023/)
  expect(year).toBeInTheDocument()
})
