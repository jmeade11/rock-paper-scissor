import { render } from '@testing-library/react';
import Main from '..';

describe('Main component tests', () => {
	it('renders without crashing', () => {
		render(<Main />);
	});
});
