import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import IPlan from '../interfaces/IPlan';
import Plan from './Plan'

const FeaturedPlans = (): JSX.Element => {

	const [plans, setPlans] = useState<IPlan[]>([]);

	useEffect(() => {

		const fetchFeaturedPlans = (): void => {
			axios.get(import.meta.env.VITE_API_ENDPOINT + '/plans')
				.then((response) => setPlans(response.data.data))
				.catch((error) => console.error(error))
		}

		fetchFeaturedPlans()

	}, [])

	return (
		<section className="container mb-4">
			<div className="text-center mb-5">
				<h6 className="text-uppercase text--style-1 mt-5">Planos</h6>
				<h3 className="text-capitalize">Escolha seu plano</h3>

				<p className="text-secondary mx-auto col-10 col-lg-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas itaque magnam recusandae reprehenderit omnis ipsa molestias sit officia delectus dolore nihil porro totam maiores perspiciatis, eveniet expedita dolores, provident!</p>
			</div>

			<div className="row row-cols-1 row-cols-md-3 align-items-center justify-content-center">
				{ plans.map((plan) => <Plan key={ plan.id } id={ plan.id } price={ plan.price } time={ plan.time } key_features={ plan.key_features } />)}
			</div>
		</section>
	);
}

export default FeaturedPlans