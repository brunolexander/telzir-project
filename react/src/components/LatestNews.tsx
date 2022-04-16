import { useState, useEffect } from 'react'
import IArticle from '../interfaces/IArticle'
import Article from './Article'
import axios from 'axios'
import { Spinner } from 'react-bootstrap';

const LatestNews = (): JSX.Element => {

	const [articles, setArticles] = useState<IArticle[]>([])
	const [loadingArticles, setLoadingArticles] = useState<boolean>(true)

	useEffect(() => {

		const fetchArticles = (): void => {
			axios.get(import.meta.env.VITE_API_ENDPOINT + '/articles?limit=3&sort=created_at&order=desc')
				.then((response) => {
					setArticles(response.data.data)
					setLoadingArticles(false)
				})
				.catch((error) => console.error(error))
		}

		fetchArticles()

	}, [])

	return (
		<section className="container pb-2">
			<div className="text-center mb-5">
				<h6 className="text-uppercase text--style-1 mt-5">Nosso Blog</h6>
				<h3 className="text-capitalize">Últimas notícias e artigos</h3>
				<p className="text-secondary mx-auto col-10 col-lg-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas itaque magnam recusandae reprehenderit</p>
				
				<div className="row align-items-center justify-content-center justify-content-lg-between mt-5">
					{ loadingArticles ? (
						<Spinner className="mx-auto" animation="border" variant="secondary" />
					) : (
						articles.map((article) => {

							let content: string = article.content

							if (content.length > 150) {
								content = content.substr(0, 150) + '...'
							}

							return (
								<Article key={ article.id } id={ article.id } title={ article.title } content={ content } image={ article.image } />
							)
						})
					)}
				</div>
			</div>
		</section>
	)
}

export default LatestNews