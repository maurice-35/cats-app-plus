import { render, screen } from '@testing-library/react'
import Navigation from '../Navigation'

const mockedSetNavigation = jest.fn()

describe("Navigation", () => {
	it("should display cats page", () => {
		render(
			<Navigation
				cats={[]}
				setCats={mockedSetNavigation}
			/>
		)
		const clickedElement = screen.getByText(/Cats/i)
		expect(clickedElement).toMatchSnapshot()
	})
})