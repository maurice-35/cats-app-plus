import { render, screen, fireEvent } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import CatCard from '../CatCard'


const mockedSetNavigation = jest.fn()

describe("CatCard", () => {
	test("Button should display description", () => {
		render(<CatCard />);
		const displayDescription = screen.getByText(/Click me!/i);
		expect(displayDescription).toMatchSnapshot();
	});


	it("should display cats page", () => {
		render(
			<CatCard
				show={[]}
				setShow={mockedSetNavigation}
			/>
		)
		const displayDescription = screen.getByText(/Click me!/i)
		fireEvent.click(displayDescription)
		fireEvent.change(displayDescription, { target: { value: 'description' } })
		const buttonElement = screen.getByRole('button', { name: /Click me!/i })
		fireEvent.click(buttonElement)
		// eslint-disable-next-line testing-library/no-unnecessary-act
		act(async () => {
			fireEvent.click(displayDescription)
		})
		expect(displayDescription).toMatchSnapshot()
	})
})
