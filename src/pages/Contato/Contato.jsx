import Header from "../../components/Header/Header";
import styles from './Contato.module.css';

export default function Contato() {
	return (
		<>
			<div className={styles.container}>
				<p>Entre em contato através dos canais abaixo:</p>
				<a href="mailto:adrianoresouza@gmail.com">E-mail: adrianoresouza@gmail.com</a>
				<a href="https://github.com/adrianoresouza" target="_blank">GitHub: adrianoresouza</a>
				<a href="https://www.linkedin.com/in/adriano-resende-de-souza-b4866835/" target="_blank">Linkedin: adrianoresouza@gmail.com</a>
			</div>
		</>
	);
}