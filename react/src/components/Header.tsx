import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import logo from '../assets/img/logo.png'
import techPurpleBg from '../assets/img/tech-purple-bg.png'
import IHeader from '../interfaces/IHeader'
import { Navbar, Nav } from 'react-bootstrap'

const Header = ({ 
	onClickFeaturedPlans, 
	onClickPricingCalculator, 
	onClickFaq, 
	onClickContact, 
	onClickHome
}: IHeader): JSX.Element => (

	<header className="d-flex flex-column hero">
		<Navbar variant="dark" expand="lg">
			<div className="container">
				<div className="navbar-brand me-5">
					<img className="navbar-logo" src={logo} alt="Telzir" />
				</div>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
			
						<Nav className="px-4 px-md-0 align-items-start justify-content-start flex-grow-1 pe-3">
							<li className="nav-item mx-lg-4">
								<button className="btn btn-link nav-link active shadow-none" onClick={() => {onClickHome && onClickHome()}} >Home</button>
							</li>

							<li className="nav-item mx-lg-4">
								<button className="btn btn-link nav-link shadow-none" onClick={() => { onClickFeaturedPlans && onClickFeaturedPlans() }}>Planos</button>
							</li>

							<li className="nav-item mx-lg-4">
								<button className="btn btn-link nav-link shadow-none" onClick={() => { onClickPricingCalculator && onClickPricingCalculator() }}>Simular</button>
							</li>

							<li className="nav-item mx-lg-4">
								<button className="btn btn-link nav-link shadow-none" onClick={() => { onClickFaq && onClickFaq() }}>Perguntas Frequentes</button>
							</li>
						</Nav>

						<button type="button" className="btn ms-4 ms-md-0 mt-4 mt-lg-0 btn--style-1" onClick={() => { onClickContact && onClickContact() }}>
							<FontAwesomeIcon icon="phone" /> Fale Conosco
						</button>
				</Navbar.Collapse>
			</div>
		</Navbar>

		<div className="container h-100 py-5 text-white">
			<div className="h-100 row align-items-center justify-content-center justify-content-md-between">
				<div className="col-md-5 mb-5 text-center text-md-start">
					<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
					<p className="text--style-2 my-4">Assumenda esse nulla quia recusandae aspernatur veritatis, et corrupti adipisci quidem pariatur praesentium</p>
					<button type="button" onClick={() => { onClickFeaturedPlans && onClickFeaturedPlans() }} className="btn btn-lg btn--style-2 px-4 py-2">Conheça nossos planos</button>
				</div>

				<div className="col-11 col-md-6 align-self-stretch">
					<img src={techPurpleBg} className="header-image" alt="" />
				</div>
			</div>
		</div>
	</header>
)

export default Header