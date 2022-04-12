import { Accordion } from "react-bootstrap"

const Faq = (): JSX.Element => {
	
	return (
		<section className="container py-5 mb-4">
			<div className="row align-items-center justify-content-center">
				<div className="col-10">
					<h3>Perguntas Frequentes</h3>
					<p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique accusamus doloribus, cum provident facilis, iure! Aut odio in harum, iste placeat minus dolores eum ullam veniam, ipsam. Officiis, alias, voluptatibus.</p>

					<Accordion defaultActiveKey="0">
						
					</Accordion>
				</div>
			</div>
		</section>
	)
}

export default Faq