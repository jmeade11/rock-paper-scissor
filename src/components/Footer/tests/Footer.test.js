import { render, screen } from '@testing-library/react';
import Footer from '..';

describe('Footer component tests', () => {
	it('renders without crashing', () => {
		render(<Footer />);
	});

	test('renders jmeade11 link', () => {
		render(<Footer />);
		const linkElement = screen.getByText(/jmeade11/i);
		expect(linkElement).toBeInTheDocument();
	});

	test('renders Frontend Mentor link', () => {
		render(<Footer />);
		const linkElement = screen.getByText(/Frontend Mentor/);
		expect(linkElement).toBeInTheDocument();
	});
});
