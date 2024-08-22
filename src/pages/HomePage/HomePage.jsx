import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomePagestyles from './HomePage.module.css';
import me from '../../assets/me.JPG';

import { } from 'devicon';
import { 
	CsharpOriginal as CSharpIcon, 
	ReactOriginalWordmark as ReactIcon, 
	MicrosoftsqlserverOriginalWordmark as SQLIcon,
	DotnetcoreOriginal as DotNetIcon,
	FirebaseOriginal as FirebaseIcon,
	BootstrapOriginal as BootstrapIcon,
	JavascriptOriginal as JavascriptIcon
} from 'devicons-react'

export default function HomePage() {
	return (
		<>
			<div className={HomePagestyles.container}>
				<section className={HomePagestyles.secaoApresentacao}>
					<div className={HomePagestyles.areaApresentacao}>
						<img src={me} height={200}/>
						
							<p className={HomePagestyles.apresentacao}>
								Olá! Sou Adriano Resende!
								Desenvolvedor .NET há 12 anos.
								Além da plataforma .NET desenvolvo utilizando reactJS e sua versão para dispositivos móveis, o React Native.
							</p>
						
					</div>
				</section>
				<section className={HomePagestyles.areaTecnologias}>
					<div>
						<p>Tecnologias: </p>
						<DotNetIcon size={50}/>
						<CSharpIcon size={50}/>
						<SQLIcon size={50}/>
						<ReactIcon size={50}/> 
						<FirebaseIcon size={50}/>
						<BootstrapIcon size={50}/>
						<JavascriptIcon size={50}/>
					</div>
				</section>
				<section class={HomePagestyles.projetos}>
					<div class={HomePagestyles.projetosTitulo}>
						<h1>Projetos</h1>
					</div>
					<div className={HomePagestyles.areaProjetos}>
						<div class={HomePagestyles.projeto}>
							<p><strong>Controle de Finanças</strong></p>
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
							<p><strong>Portfólio</strong></p>
							<hr/>
							<p>
								Projeto deste portfólio em SPA criado utilizando ReactJS
							</p>
							<a href='https://github.com/adrianoresouza/portfolio' target='_blank'>Veja o projeto no GitHub</a>
						</div>
						<div class={HomePagestyles.projeto}>
							<p><strong>Projeto de site de vendas de Lanches</strong></p>
							<hr/>
							<p>
								Projeto de um site de vendas de lanches desenvolvido durante curso de asp.net core ministrado pelo Macoratti.
								Atualmente o projeto se encontra em fase de estilização, visto que o curso teve como objetivo ensinar o funcionamento da plataforma.
							</p>
							<a href='https://github.com/adrianoresouza/portfolio' target='_blank'>Veja o projeto no GitHub</a>
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		</>
	);
}

