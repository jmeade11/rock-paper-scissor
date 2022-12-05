import { useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

function createModalRootElement() {
	const modalRoot = document.createElement('div');
	modalRoot.setAttribute('id', 'modalRoot');
	document.body.appendChild(modalRoot);

	return modalRoot;
}

export default function Modal({
	handleClose,
	open = false,
	title = '',
	children,
}) {
	const modalRoot = useRef(
		document.getElementById('modalRoot') || createModalRootElement()
	);

	useLayoutEffect(() => {
		if (!open) return;
		const escapeToClose = (event) => {
			if (event.key !== 'Escape') return;
			handleClose(false);
		};

		document.addEventListener('keyup', escapeToClose);

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style = '';

			document.removeEventListener('keyup', escapeToClose);
		};
	});

	if (!open) return null;

	const modalContent = (
		<div
			className={styles.backdrop}
			onClick={() => handleClose(false)}
			data-testid="backdrop"
		>
			<div
				role="dialog"
				id="dialog"
				aria-modal="true"
				className={styles.modal}
				aria-labelledby="modalTitle"
				onClick={(event) => event.stopPropagation()}
			>
				<header className={styles.modalHeader}>
					<h2 id="modalTitle" className={styles.modalTitle}>
						{title}
					</h2>
					<button onClick={() => handleClose(false)} className={styles.close}>
						<span className="sr-only">Close Modal</span>
					</button>
				</header>
				<div className={styles.modalBody}>{children}</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, modalRoot.current);
}
