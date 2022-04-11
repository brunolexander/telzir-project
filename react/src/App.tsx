import './assets/lib/bootstrap/css/bootstrap.css'
import './assets/css/style.css'
import './fontawesome'

import Header from './components/Header'
import Footer from './components/Footer'
import Plan from './components/Plan'

function App(): React.FunctionComponent
{
	return (
		<div className="App">
			<Header/>
			<main>
				<section className="container mb-4">
					<div className="text-center mb-5">
						<h6 className="text-uppercase text--style-1 mt-5">Planos</h6>
						<h3 className="text-capitalize">Escolha seu plano</h3>

						<p className="text-secondary mx-auto col-10 col-lg-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas itaque magnam recusandae reprehenderit omnis ipsa molestias sit officia delectus dolore nihil porro totam maiores perspiciatis, eveniet expedita dolores, provident!</p>
					</div>

					<div className="row row-cols-1 row-cols-md-3 align-items-center justify-content-center">
						<Plan title="hello" />
						<Plan />
						<Plan />
					</div>
				</section>
			</main>
			<Footer/>
		</div>
	)
}

export default App