import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import logo from '../assets/img/logo.png'
import techPurpleBg from '../assets/img/tech-purple-bg.png'

const Header = (): JSX.Element => (

	<header className="d-flex flex-column hero">
		<nav className="navbar navbar-dark navbar-expand-lg">
			<div className="container">
				<div className="navbar-brand me-5">
					<img className="navbar-logo" src={logo} alt="Telzir" />
				</div>

				<button className="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Telzir</h5>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
					</div>

					<div className="offcanvas-body">
						<ul className="navbar-nav align-items-start justify-content-start flex-grow-1 pe-3">
							<li className="nav-item mx-lg-4"><a href="#" className="nav-link active">Home</a></li>
							<li className="nav-item mx-lg-4"><a href="#" className="nav-link">Planos</a></li>
							<li className="nav-item mx-lg-4"><a href="#" className="nav-link">Simular</a></li>
							<li className="nav-item mx-lg-4"><a href="#" className="nav-link">Perguntas Frequentes</a></li>
						</ul>

						<button type="button" className="btn mt-4 mt-lg-0 btn--style-1"><FontAwesomeIcon icon="phone" /> Fale Conosco</button>
					</div>
				</div>
			</div>
		</nav>

		<div className="container h-100 py-5 text-white">
			<div className="h-100 row align-items-center justify-content-center justify-content-md-between">
				<div className="col-md-5 mb-5 text-center text-md-start">
					<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
					<p className="text--style-2 my-4">Assumenda esse nulla quia recusandae aspernatur veritatis, et corrupti adipisci quidem pariatur praesentium</p>
					<button type="button" className="btn btn-lg btn--style-2 px-4 py-2">Conheça nossos planos</button>
				</div>

				<div className="col-11 col-md-6 align-self-stretch">
					<img src={techPurpleBg} className="header-image" alt="" />
				</div>
			</div>
		</div>
	</header>
)

export default Header