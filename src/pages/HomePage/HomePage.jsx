import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomePagestyles from './HomePage.module.css'

export default function HomePage() {
	return (
		<>
			<Header />
			<div className={HomePagestyles.container}>
				<section className={HomePagestyles.areaApresentacao}>
					<p className={HomePagestyles.bemVindo}>
						Olá! Seja bem-vindo!
					</p>
					<p className={HomePagestyles.apresentacao}>
						Sou Adriano Resende de Souza
						desenvolvedor .NET há 12 anos.
						Além da plataforma .NET desenvolvo utilizando reactJS e sua versão para dispositivos móveis, o React Native.
					</p>
				</section>
				<section class={HomePagestyles.projetos}>
					<div class={HomePagestyles.projetosTitulo}>
						<h1>Projetos</h1>
					</div>
					<div className={HomePagestyles.areaProjetos}>
						<div class={HomePagestyles.projeto}>
							<p><strong>Projeto de Controle de Finanças</strong></p>
							<hr/>
							<p>
								Projeto criado pensando em desenvolver habilidades no desenvolvimento
								front-end utilizando os recursos do reactJS e várias bibliotecas de terceiros.
								No desenvolvimento do projeto foram utilizados recursos como:
								<ul>
									<li>
										<p>react-router-dom</p>
									</li>
									<li>
										<p>contextAPI</p>
									</li>
									<li>
										<p>Firebase</p>
									</li>
								</ul>
							</p>
							<a href='https://github.com/adrianoresouza/mymoney' target='_blank'>Veja o projeto no GitHub</a>
						</div>
						<div class={HomePagestyles.projeto}>
							<p>Projeto XPTO</p>
						</div>
						<div class={HomePagestyles.projeto}>
							<p>Projeto XPTO</p>
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		</>
	);
}
