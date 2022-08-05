import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { App, LocationDisplay } from '../app'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'


test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/Home/i))
  expect(screen.getByText(/Home/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const badRoute = '/'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )
})

test('rendering a component that uses useLocation', () => {
  const route = '/some-route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  // verify location display is rendered
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})