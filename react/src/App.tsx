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
 import { useRef } from 'react'

const App = (): JSX.Element => {

	const featuredPlansRef = useRef<HTMLDivElement>(null)
	const pricingCalculatorRef = useRef<HTMLDivElement>(null)
	const faqRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)
	const latestNewsRef = useRef<HTMLDivElement>(null)
	const homeRef = useRef<HTMLDivElement>(null)

	const handleClickHome = (): void => {
		console.log("handleClickHome")
		
		if (homeRef.current) {
			homeRef.current.scrollIntoView()
		}
	}

	const handleClickFeaturedPlans = (): void => {
		if (featuredPlansRef.current) {
			featuredPlansRef.current.scrollIntoView()
		}
	}

	const handleClickPricingCalculator = (): void => {
		if (pricingCalculatorRef.current) {
			pricingCalculatorRef.current.scrollIntoView()
		}
	}

	const handleClickFaq = (): void => {
		if (faqRef.current) {
			faqRef.current.scrollIntoView()
		}
	}

	const handleClickContact = (): void => {
		if (contactRef.current) {
			contactRef.current.scrollIntoView()
		}
	}

	const handleClickLatestNews = (): void => {
		if (latestNewsRef.current) {
			latestNewsRef.current.scrollIntoView()
		}
	}

	return (
		<div className="App">
			<div ref={ homeRef }>
				<Header 
					onClickHome={ handleClickHome }
					onClickFeaturedPlans={ handleClickFeaturedPlans }
					onClickPricingCalculator={ handleClickPricingCalculator }
					onClickFaq={ handleClickFaq }
					onClickContact={ handleClickContact }
					onClickLatestNews={ handleClickLatestNews }
				 />
			 </div>

			<main>
				<div ref={ featuredPlansRef }>
					<FeaturedPlans/>
				</div>

				<div ref={ pricingCalculatorRef }>
					<PricingCalculator/>
				</div>

				<div ref={ faqRef }>
					<FAQ/>
				</div>

				<div ref={ contactRef }>
					<Contact/>
				</div>

				<div ref={ latestNewsRef }>
					<LatestNews/>
				</div>
			</main>

			<Footer
				onClickHome={ handleClickHome }
				onClickFeaturedPlans={ handleClickFeaturedPlans }
				onClickPricingCalculator={ handleClickPricingCalculator }
				onClickFaq={ handleClickFaq }
				onClickContact={ handleClickContact }
				onClickLatestNews={ handleClickLatestNews }
			/>
		</div>
	)
}

export default App