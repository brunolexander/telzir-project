import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import Question from './Question'
import IQuestion from '../interfaces/IQuestion'

const Faq = (): JSX.Element => {
	
	const [questions, setQuestions] = useState<IQuestion[]>([])

	useEffect(() => {

		const fetchFeaturedPlans = (): void => {
			axios.get(import.meta.env.VITE_API_ENDPOINT + '/questions')
				.then((response) => setQuestions(response.data.data))
				.catch((error) => console.error(error))
		}

		fetchFeaturedPlans()

	}, [])

	return (
		<section className="container py-5 mb-4">
			<div className="row align-items-center justify-content-center">
				<div className="col-10">
					<h3>Perguntas Frequentes</h3>
					<p className="text-secondary">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique accusamus doloribus, cum provident facilis, iure! Aut odio in harum, iste placeat minus dolores eum ullam veniam, ipsam. Officiis, alias, voluptatibus.
					</p>

					<Accordion defaultActiveKey="0">
						{ questions.map((question, index) => {

							return (
								<Question id={ question.id } eventKey={ String(index) } title={ question.title } content={ question.content } />
							)
						})}
					</Accordion>
				</div>
			</div>
		</section>
	)
}

export default Faq