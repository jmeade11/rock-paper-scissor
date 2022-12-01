import { render } from '@testing-library/react';
import Modal from '..';

describe('Modal component tests', () => {
	it('renders without crashing', () => {
		render(<Modal />);
	});
});
