import { render } from '@testing-library/react';
import App from '..';

describe('App component tests', () => {
	it('renders without crashing', () => {
		render(<App />);
	});
});
