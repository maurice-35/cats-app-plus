import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App, LocationDisplay } from '../app'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

test('full app rendering/navigating', async () => {
	render(<App />, { wrapper: BrowserRouter })

	expect(screen.getByText(/Welcome To Your Lovely Cats App/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
	const badRoute = '/'

	render(
		<MemoryRouter initialEntries={[badRoute]}>
			<App />
		</MemoryRouter>,
	)
})

test('rendering a component that uses useLocation', () => {
	const route = '/some-route'

	render(
		<MemoryRouter initialEntries={[route]}>
			<LocationDisplay />
		</MemoryRouter>,
	)

	expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})