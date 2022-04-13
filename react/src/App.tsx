import './assets/lib/bootstrap/css/bootstrap.css'
import './assets/css/style.css'
import './fontawesome'

import Header from './components/Header'
import Footer from './components/Footer'
import FeaturedPlans from './components/FeaturedPlans'
import PricingCalculator from './components/PricingCalculator'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import LatestNews from './components/LatestNews'

const App = (): JSX.Element => (

	<div className="App">
		<Header/>
		<main>
			<FeaturedPlans/>
			<PricingCalculator/>
			<FAQ/>
			<Contact/>
			<LatestNews/>
		</main>
		<Footer/>
	</div>
)

export default App