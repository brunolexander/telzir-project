import { useCallback, useEffect, useState } from 'react'
import IPlan from "../interfaces/IPlan"
import IPhoneCode from "../interfaces/IPhoneCode"
import { IPricingCalculatorFormData, IPricingCalculatorFormInputs } from "../interfaces/IPricingCalculatorForm"
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup, Row } from 'react-bootstrap'

const PricingCalculator = (): JSX.Element => {

	const [plans, setPlans] = useState<IPlan[]>([])
	const [phoneCodes, setPhoneCodes] = useState<IPhoneCode[]>([])
	const { register, setError, clearErrors, handleSubmit, formState: { errors } } = useForm<IPricingCalculatorFormData>()
	const [isCalculating, setIsCalculating] = useState<boolean>(false)
	const [costWithoutPlan, setCostWithoutPlan] = useState<number>(0)
	const [costWithPlan, setCostWithPlan] = useState<number>(0)

	const [playAnimation, setPlayAnimation] = useState<IPricingCalculatorFormInputs>({
		planId: false,
		destinationPhoneId: false,
		sourcePhoneId: false,
		callDuration: false
	})

	useEffect(() => {

		const fetchFeaturedPlans = (): void => {
			axios.get(import.meta.env.VITE_API_ENDPOINT + '/plans')
				.then((response) => setPlans(response.data.data))
				.catch((error) => console.error(error))
		}

		const fetchPhoneCodes = (): void => {
			axios.get(import.meta.env.VITE_API_ENDPOINT + '/phone-codes')
				.then((response) => setPhoneCodes(response.data.data))
				.catch((error) => console.error(error))
		}

		fetchFeaturedPlans()
		fetchPhoneCodes()

	}, [])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, planId: true 
		}))

	}, [errors.planId])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, destinationPhoneId: true 
		}))

	}, [errors.destinationPhoneId])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, sourcePhoneId: true 
		}))

	}, [errors.sourcePhoneId])

	useEffect(() => {
		setPlayAnimation(playAnimation => ({
		 ...playAnimation, callDuration: true 
		}))

	}, [errors.callDuration])

	const handleCalculateCost = useCallback(async (data: IPricingCalculatorFormData): Promise<void> => {
	
		setIsCalculating(true)

		try {

			const response = await axios.get(
				import.meta.env.VITE_API_ENDPOINT + `/call-rates/calculate-call-cost/${data.planId}/${data.sourcePhoneId}/${data.destinationPhoneId}/${data.callDuration}`
			)

			setCostWithPlan(
				response.data.costWithPlan.toFixed(2)
			)

			setCostWithoutPlan(
				response.data.costWithoutPlan.toFixed(2)
			)

		} catch (error: any) {

			console.log(error)

			setError('destinationPhoneId', { type: 'not found', message: 'some error message'})

			setPlayAnimation({
				planId: true,
				destinationPhoneId: true,
				sourcePhoneId: true,
				callDuration: true
			})
		}
		
		setIsCalculating(false)

	}, [isCalculating])

	return (
		<section className="container-fluid bg--style-2 text-white">
			<div className="container py-5">
				<div className="row flex-column align-items-center">
					<div className="col-lg-7 mb-4">
						<div className="text-center w-7">
							<h2>Calcular Gastos</h2>
							<p className="text--style-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque culpa, praesentium enim. Quas sapiente nulla eum vitae ad, molestiae, doloremque repudiandae numquam ipsa suscipit ex vero fuga est. At.</p>
						</div>
					</div>

					<div className="col-lg-7">
						<Form noValidate onSubmit={ handleSubmit(handleCalculateCost) } className="p-5" style={{ backgroundColor: '#301F4D' }} >
							<Row>
								<Form.Group controlId='plan' className="mb-4">
									<Form.Label>Plano</Form.Label>

									<Form.Select 
										isInvalid={ errors.planId ? true : false } 
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, planId: false })} 
										defaultValue='' 
										{ ...register('planId', { required: true }) } 
										className={ `form--style-1 ${ playAnimation.planId && 'shake' }`}
									>
										
										<option key={0} value='' disabled>Selecione um plano</option>

										{ plans.map((plan) => {
											return (
												<option className='text-dark' key={plan.id} value={ plan.id }>FaleMais { plan.time }</option>
											)
										})}
										
									</Form.Select>

									<Form.Control.Feedback type="invalid">
										Selecione um plano
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId='sourcePhoneId' className="col-6">
									<Form.Label>Origem</Form.Label>

									<Form.Select 
										isInvalid={ errors.sourcePhoneId ? true : false }
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, sourcePhoneId: false })} 
										defaultValue='' 
										{ ...register('sourcePhoneId', { required: true }) } 
										className={ `form--style-1 ${ playAnimation.sourcePhoneId && 'shake' }` }
									>
										<option key={0} value='' disabled>Selecione a origem</option>

										{phoneCodes.map((phoneCode) => {
											return (
												<option className='text-dark' key={phoneCode.id} value={phoneCode.id}>{ phoneCode.code } - { phoneCode.state }</option>
											)
										})}
									</Form.Select>

									<Form.Control.Feedback type="invalid">
										Selecione a origem
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId='destinationPhoneId' className="col-6 mb-4">
									<Form.Label>Destino</Form.Label>

									<Form.Select 
										isInvalid={ errors.destinationPhoneId ? true : false }
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, destinationPhoneId: false })} 
										defaultValue='' 
										{ ...register('destinationPhoneId', { required: true }) } 
										onChange={() => clearErrors('destinationPhoneId')}
										className={ `form--style-1 ${ playAnimation.destinationPhoneId && 'shake' }` }
									>
										<option key={0} value='' disabled>Selecione o destino</option>

										{phoneCodes.map((phoneCode) => {
											return (
												<option className='text-dark' key={phoneCode.id} value={phoneCode.id}>{ phoneCode.code } - { phoneCode.state }</option>
											)
										})}
									</Form.Select>

									<Form.Control.Feedback type="invalid">
										{ errors.destinationPhoneId && errors.destinationPhoneId.type === 'not found' ? (
												'Destino inválido, selecione outra opção'
											) : (
												'Selecione o destino'
											)
										}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId='callDuration' className="mb-4">
									<Form.Label>Duração da ligação</Form.Label>
									<InputGroup hasValidation>
										<Form.Control 
											isInvalid={ errors.callDuration ? true : false }
											onAnimationEnd={() => setPlayAnimation({ ...playAnimation, callDuration: false })} 
											type="number" 
											{ ...register('callDuration', { required: true, min: 0 }) } 
											min={0} 
											className={ `form--style-1 ${ playAnimation.callDuration && 'shake' }` } 
										/>
										<InputGroup.Text className="form--style-1">Minutos</InputGroup.Text>
									
										<Form.Control.Feedback type="invalid">
											Informe um valor válido
							            </Form.Control.Feedback>
									</InputGroup>
								</Form.Group>

								<Form.Group controlId='costWithPlan' className="col-md-6">
									<Form.Label>Custo com plano</Form.Label>

									<InputGroup>
										<Form.Control type="text" value={ costWithPlan } className="font-italic form--style-1" readOnly />
										<InputGroup.Text className="form--style-1">
											{ isCalculating ? (
												<FontAwesomeIcon icon='spinner' spin size='lg' />
											) : ( 
												'R$'
											)}
										</InputGroup.Text>
									</InputGroup>
								</Form.Group>

								<Form.Group controlId='costWithoutPlan' className="col-md-6">
									<Form.Label>Custo sem plano</Form.Label>

									<InputGroup>
										<Form.Control type="text" value={ costWithoutPlan } className="font-italic form--style-1" readOnly />
										<InputGroup.Text className="form--style-1">
											{ isCalculating ? (
												<FontAwesomeIcon icon='spinner' spin size='lg' />
											) : ( 
												'R$'
											)}
										</InputGroup.Text>
									</InputGroup>
								</Form.Group>

								<div className="d-grid mt-4">
									<button type="submit" className="btn px-4 py-2 btn--style-2">Calcular</button>
								</div>
							</Row>
						</Form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingCalculator