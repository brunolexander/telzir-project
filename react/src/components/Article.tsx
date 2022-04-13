import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IArticle from '../interfaces/IArticle'

const Article = ({id, title, content, image}: IArticle): JSX.Element => {

	return (
		<div className="col-8 col-md-6 col-lg-4 mb-4">
			<div className="card bg-light">
				<div className="overflow-hidden">
					<img src={ image } className="card-img-top article-image" alt="" />
				</div>
				<div className="card-body">
					<h5 className="card-title">{ title }</h5>
					<p className="card-text text-secondary">{ content }</p>
					<a href="#" className="article-link">Saber mais <FontAwesomeIcon icon='angles-right' style={{ verticalAlign: 'middle' }} /></a>
				</div>
			</div>
		</div>
	)
}

export default Article