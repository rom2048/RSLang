import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProviders } from '../../utils/test-utils'
import ErrorPage from './ErrorPage'

test('ErrorPage render', () => {
  renderWithProviders(
    <MemoryRouter initialEntries={['/']}>
      <ErrorPage />
    </MemoryRouter>,
  )
  const text = screen.getByText(/sorry/i)
  expect(text).toBeInTheDocument()
})
