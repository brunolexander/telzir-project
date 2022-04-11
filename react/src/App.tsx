import './assets/lib/bootstrap/css/bootstrap.css'
import './assets/css/style.css'
import './fontawesome'

import Header from './components/Header'
import Footer from './components/Footer'
import FeaturedPlans from './components/FeaturedPlans'

const App = (): JSX.Element => (

	<div className="App">
		<Header/>
		<main>
			<FeaturedPlans/>
		</main>
		<Footer/>
	</div>
)

export default App