import { render } from '@testing-library/react';
import Header from '..';

describe('Header component tests', () => {
	it('renders without crashing', () => {
		render(<Header />);
	});
});
