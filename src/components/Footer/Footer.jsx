import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.Footer}>
			<div className={styles.attribution}>
				Challenge by {}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					rel="noreferrer"
					target="_blank"
				>
					Frontend Mentor
				</a>
				{} | Coded by {}
				<a href="https://github.com/jmeade11">jmeade11</a> {}
				<span role="img" aria-label="waving hand emoji">
					👋
				</span>
			</div>
		</footer>
	);
}
