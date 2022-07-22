import React from 'react'
import ReactDOM  from 'react-dom';
// import { render, screen } from '@testing-library/react'
import CatCard from './component/cats/CatCard'



it('renders without crashing', () => {
	const div = document.createElement("div");
	ReactDOM.render(<CatCard></CatCard>, div)
  // render(<CatCard />);
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument();
});