import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '..';

test('modal shows the title, children and a close button', () => {
	render(
		<Modal title="modal title" open={true}>
			<div>test</div>
		</Modal>
	);

	expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
		/modal title/i
	);
	expect(screen.getByText(/test/i)).toBeInTheDocument();
	expect(
		screen.getByRole('button', { name: /close modal/i })
	).toBeInTheDocument();
});

test('modal close button handles close', () => {
	const handleClose = jest.fn();

	render(<Modal handleClose={handleClose} open={true}></Modal>);

	userEvent.click(screen.getByText(/close modal/i));

	expect(handleClose).toHaveBeenCalledTimes(1);
});

test('click on modal backdrop handles close', () => {
	const handleClose = jest.fn();

	render(<Modal handleClose={handleClose} open={true}></Modal>);

	userEvent.click(screen.getByTestId('backdrop'));

	expect(handleClose).toHaveBeenCalledTimes(1);
});

test('modal is closed when escape key is pressed', () => {
	const handleClose = jest.fn();

	render(<Modal handleClose={handleClose} open={true}></Modal>);

	userEvent.keyboard('{Escape}');
	expect(handleClose).toHaveBeenCalledTimes(1);
});
