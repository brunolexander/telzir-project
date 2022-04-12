import { Accordion } from "react-bootstrap"
import IQuestion from "../interfaces/IQuestion"

const Question = ({ title, content, eventKey}: IQuestion): JSX.Element => {

	return (
		<Accordion.Item eventKey={ eventKey }>
			<Accordion.Header>{ title }</Accordion.Header>
			<Accordion.Body>{ content }</Accordion.Body>
		</Accordion.Item>
	)
}

export default Question