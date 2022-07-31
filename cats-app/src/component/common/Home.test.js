import React from "react";
import { render, screen } from "@testing-library/react"
import Home from "./Home";

test("Home page should be rendered", () => {
	render(<Home />);
	const paragraph = screen.getByText(/Welcome To Your Lovely Cats App/i);
	expect(paragraph).toMatchSnapshot();
});