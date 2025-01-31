import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import { IContactFormData, IContactFormInputs } from '../interfaces/IContactForm'

const Contact = (): JSX.Element => {

	const { register, handleSubmit, formState: { errors } } = useForm<IContactFormData>()

	const [playAnimation, setPlayAnimation] = useState<IContactFormInputs>({
		name: false,
		phone: false,
		email: false,
		subject: false,
		message: false
	})

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, email: true 
		}))

	}, [errors.email])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, name: true 
		}))

	}, [errors.name])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, phone: true 
		}))

	}, [errors.phone])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, message: true 
		}))

	}, [errors.message])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, subject: true 
		}))

	}, [errors.subject])

	const onSubmit = (): void => {
		// TODO: send message
	}

	return (
		<section className="container-fluid bg--style-2 text-white">
			<div className="container py-5">
				<div className="row align-items-center justify-content-center justify-content-lg-between">
					<div className="col-lg-6">
						<div className="text-center text-lg-start">
							<h2>Fale Conosco</h2>
							<p className="text--style-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque culpa, praesentium enim. Quas sapiente nulla eum vitae ad, molestiae, doloremque repudiandae numquam ipsa suscipit ex vero fuga est. At.</p>
						</div>

						<ul className="list-unstyled d-flex flex-column align-items-stretch align-items-md-start mt-5">
							<li className="row align-items-center justify-content-start mb-5">
								<div className="col-auto">
									<span className="p-3 bg--style-1 rounded">
										<FontAwesomeIcon icon='location-dot' fixedWidth size='lg' />
									</span>
								</div>

								<div className="col-auto">
									<h6>Endereço</h6>
									<div className="text--style-2">123 Lorem ipsum dolor</div>
									<div className="text--style-2">Consectetur Adipisicing Elit</div>
								</div>
							</li>

							<li className="row align-items-center justify-content-start mb-5">
								<div className="col-auto">
									<span className="p-3 bg--style-1 rounded">
										<FontAwesomeIcon icon='envelope' fixedWidth size='lg' />
									</span>
								</div>

								<div className="col-auto">
									<h6>E-mail</h6>
									<span className="text--style-2">suporte@email.com</span>
								</div>
							</li>

							<li className="row align-items-center justify-content-start mb-5">
								<div className="col-auto">
									<span className="p-3 bg--style-1 rounded">
										<FontAwesomeIcon icon='phone' fixedWidth size='lg' />
									</span>
								</div>

								<div className="col-auto">
									<h6>Telefone</h6>
									<div className="text--style-2">(99) 9999 9999</div>
									<div className="text--style-2">segunda a sexta, 14h ás 16h</div>
								</div>
							</li>
						</ul>
					</div>

					<div className="col-lg-6">
						<form noValidate onSubmit={ handleSubmit(onSubmit) } className="p-5" style={{ backgroundColor: '#301F4D' }}>
							<div className="row">

								<Form.Group className="mb-4">
									<Form.Label className="form-label">Seu nome</Form.Label>
									<Form.Control 
										isInvalid={ errors.name ? true : false } 
										type="text" 
										{ ...register('name', { required: true }) } 
										className={ `form--style-1 ${ playAnimation.name && 'shake' }`}
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, name: false })}
									/>

									<Form.Control.Feedback type="invalid">
										Informe seu nome
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4">
									<Form.Label className="form-label">Número de telefone</Form.Label>
									<Form.Control 
										isInvalid={ errors.phone ? true : false } 
										type="tel" 
										{ ...register('phone', { required: true }) } 
										className={ `form--style-1 ${ playAnimation.phone && 'shake' }`}
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, phone: false })}
									 />

									<Form.Control.Feedback type="invalid">
										Informe seu telefone
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4">
									<Form.Label className="form-label">Endereço de e-mail</Form.Label>

									<Form.Control 
										isInvalid={ errors.email ? true : false } 
										type="email" 
										{ ...register('email', {
											required: true,
											pattern: { 
												value: /^\S+@\S+\.\S+$/,
												message: 'Digite um e-mail válido'
											} 
										}) }
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, email: false })} 
										className={ `form--style-1 ${ playAnimation.email && 'shake' }`} 
									/>

								{ errors.email &&
									<Form.Control.Feedback type="invalid">
										{ errors.email.type === 'required' ? (
											'Informe seu e-mail'
										) : (
											errors.email.message
										)}
									</Form.Control.Feedback> 
								}

								</Form.Group>

								<Form.Group className="mb-4">
									<Form.Label>Assunto</Form.Label>

									<Form.Select 
										isInvalid={ errors.subject ? true : false } 
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, subject: false })} 
										defaultValue='' 
										{ ...register('subject', { required: true }) } 
										className={ `form--style-1 ${ playAnimation.subject && 'shake' }`}
									>
										<option value='' disabled>Selecione o assunto</option>
										<option className='text-dark' value='seviços'>Serviços</option>
										<option className='text-dark' value='problemas'>Problemas Técnicos</option>
										<option className='text-dark' value='outro'>Outro</option>
									</Form.Select>

									<Form.Control.Feedback type="invalid">
										Selecione o assunto
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4">
									<Form.Label className="form-label">Mensagem</Form.Label>
									<Form.Control 
										isInvalid={ errors.message ? true : false } 
										as='textarea' 
										rows={ 7 } 
										style={{ resize:'none' }} 
										{ ...register('message', { required: true }) }  
										className={ `form--style-1 ${ playAnimation.message && 'shake' }`} 
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, message: false })}
									/>
								
									<Form.Control.Feedback type="invalid">
										Digite a mensagem
									</Form.Control.Feedback>
								</Form.Group>

								<div className="d-grid mt-1">
									<button type="submit" className="btn px-4 py-2 btn--style-2">Enviar</button>
								</div>

							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact