import { useCallback, useEffect, useState } from 'react'
import IPlan from "../interfaces/IPlan"
import IPhoneCode from "../interfaces/IPhoneCode"
import ICallRate from "../interfaces/ICallRate"
import { IPricingCalculatorFormData, IPricingCalculatorFormInputs } from "../interfaces/IPricingCalculatorForm"
import axios, { AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup, Row } from 'react-bootstrap'

const PricingCalculator = (): JSX.Element => {

	const [plans, setPlans] = useState<IPlan[]>([])
	const [phoneCodes, setPhoneCodes] = useState<IPhoneCode[]>([])
	const [callRates, setCallRates] = useState<ICallRate[]>([])
	const { register, handleSubmit, formState: { errors } } = useForm<IPricingCalculatorFormData>()
	const [isCalculating, setIsCalculating] = useState<boolean>(false)
	const [costWithoutPlan, setCostWithoutPlan] = useState<number>()
	const [costWithPlan, setCostWithPlan] = useState<number>()

	const [playAnimation, setPlayAnimation] = useState<IPricingCalculatorFormInputs>({
		planTime: false,
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

	const handleRequiredInputs = (): void => {
		setPlayAnimation({
			planTime: errors.planTime ? true : false,
			destinationPhoneId: errors.destinationPhoneId ? true : false,
			sourcePhoneId: errors.sourcePhoneId ? true : false,
			callDuration: errors.callDuration ? true : false
		})
	}

	const handleCalculateCost = useCallback(async (data: IPricingCalculatorFormData): Promise<void> => {
	
		setIsCalculating(true)

		//event.preventDefault()

		try {
			const response = await axios.get(
				import.meta.env.VITE_API_ENDPOINT + `/call-rates/${data.sourcePhoneId}/${data.destinationPhoneId}`
			)
		} catch (error: any) {
			if (error.response.status === 404) {
				console.log('not found')
			} else {
				console.error(error)
			}
		}

		/*const callDuration: number = data.callDuration || 0
		const planTime: number = data.planTime || 0
		const actualCallDuration: number = Math.max(callDuration - planTime, 0)
		const callRate: ICallRate = response.data.data[0]
		
		setCostWithPlan(actualCallDuration * callRate.cost_per_minute)
		setCostWithoutPlan(callDuration * callRate.cost_per_minute)*/
		
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
						<Form noValidate onSubmit={ handleSubmit(handleCalculateCost, handleRequiredInputs) } className="p-5" style={{ backgroundColor: '#301F4D' }} >
							<Row>
								<Form.Group controlId='plan' className="mb-4">
									<Form.Label>Plano</Form.Label>

									<Form.Select 
										isInvalid={ errors.planTime ? true : false } 
										onAnimationEnd={() => setPlayAnimation({ ...playAnimation, planTime: false })} 
										defaultValue='' 
										{ ...register('planTime', { required: true }) } 
										className={ `form--style-1 ${ playAnimation.planTime && 'shake' }`}
									>
										
										<option key={0} value='' disabled>Selecione um plano</option>

										{ plans.map((plan) => {
											return (
												<option className='text-black' key={plan.id} value={ plan.time }>FaleMais { plan.time }</option>
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
												<option className='text-black' key={phoneCode.id} value={phoneCode.id}>{ phoneCode.code } - { phoneCode.state }</option>
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
										className={ `form--style-1 ${ playAnimation.destinationPhoneId && 'shake' }` }
									>
										<option key={0} value='' disabled>Selecione o destino</option>

										{phoneCodes.map((phoneCode) => {
											return (
												<option className='text-black' key={phoneCode.id} value={phoneCode.id}>{ phoneCode.code } - { phoneCode.state }</option>
											)
										})}
									</Form.Select>

									<Form.Control.Feedback type="invalid">
										Selecione o destino
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
										<Form.Control type="text" value={ costWithPlan } className="form-control form--style-1" readOnly />
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
										<Form.Control type="text" value={ costWithoutPlan } className="form--style-1" readOnly />
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