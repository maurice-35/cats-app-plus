import { screen, render, fireEvent } from '@testing-library/react'
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import CatIndex from './CatIndex'


const body = { hello: "world" };

const server = setupServer(
	rest.get(
		"https://api.thecatapi.com/v1/breeds",
		(_, res, ctx) => {
			return res(ctx.status(200), ctx.json(body));
		}
	)
);

describe("CatIndex", () => {
	beforeAll(() => server.listen());

	afterEach(() => server.resetHandlers());

	afterAll(() => server.close());
	it('should do something', () => {
		expect(true).toBe(true)
	})
});


const mockedSetCatIndex = jest.fn()

describe("CatCard", () => {
	it("should display loading page", () => {
		render(
			<CatIndex
				cat={[]}
				setCat={mockedSetCatIndex}
			/>
		)
		const displayDescription = screen.getByText(/...loading/i)
		expect(displayDescription).toMatchSnapshot()
	})
})


let container = null
beforeEach(() => {
	container = document.createElement("div")
	document.body.appendChild(container)
})

afterEach(() => {
	unmountComponentAtNode(container)
	container.remove()
	container = null
})
it('renders breed data', async () => {
	const fakeBreed = {
		name: "",
		image: "",
		origin: "",
		weight: "",

	}
	jest.spyOn(global, "fetch").mockImplementation(() =>
		Promise.resolve({
			json: () => Promise.resolve(fakeBreed)
		})
	)

	// eslint-disable-next-line testing-library/no-unnecessary-act
	await act(async () => {
		fireEvent.click(container)
		render(<CatIndex id="123" />, container)
	})

	expect(container.textContent).toContain(fakeBreed.name)
	expect(container.textContent).toContain(fakeBreed.origin)
	expect(container.textContent).toContain(fakeBreed.image)
	expect(container.textContent).toContain(fakeBreed.weight)
	global.fetch.mockRestore()
})
