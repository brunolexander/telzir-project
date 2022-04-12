import { useCallback, useEffect, useState } from "react"
import IPlan from "../interfaces/IPlan"
import IPhoneCode from "../interfaces/IPhoneCode"
import ICallRate from "../interfaces/ICallRate"
import axios, { AxiosResponse } from 'axios'

const PricingCalculator = (): JSX.Element => {

	const [plans, setPlans] = useState<IPlan[]>([])
	const [phoneCodes, setPhoneCodes] = useState<IPhoneCode[]>([])
	const [callRates, setCallRates] = useState<ICallRate[]>([])
	const [isCalculating, setIsCalculating] = useState<Boolean>(false)
	const [destinationPhoneId, setDestinationPhoneId] = useState<number>()
	const [sourcePhoneId, setSourcePhoneId] = useState<number>()

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

	const handleCalculateCost = useCallback(async (event: React.FormEvent) => {
		
		event.preventDefault()

		const response = await axios.get(import.meta.env.VITE_API_ENDPOINT + `/call-rates/${sourcePhoneId}/${destinationPhoneId}`)

		//console.log(response.data.data)

		console.log('calculate cost')

	}, [isCalculating])

	const handleChangeSourcePhoneId = (event: React.ChangeEvent<HTMLSelectElement>): void => {

		setSourcePhoneId(Number(event.target.value))

		console.log(sourcePhoneId)
	}

	const handleChangeDestinationPhoneId = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		console.log('handleChangeDestinationPhoneId')
		setDestinationPhoneId(Number(event.target.value))
	}

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
						<form onSubmit={ handleCalculateCost } className="p-5" style={{ backgroundColor: '#301F4D' }} >
							<div className="row">

								<div className="mb-4">
									<label htmlFor="plan" className="form-label">Plano</label>

									<select className="form-select form--style-1" name="plan" id="plan">
										<option key={0}>Selecione um plano</option>

										{ plans.map((plan) => {
											return (
												<option key={plan.id} value={ plan.time }>FaleMais { plan.time }</option>
											)
										})}
										
									</select>
								</div>

								<div className="col-6">
									<label className="form-label" htmlFor="source">Origem</label>

									<select onChange={ handleChangeSourcePhoneId } className="form-select form--style-1" name="source" id="source">
										{phoneCodes.map((phoneCode) => {
											return (
												<option key={phoneCode.id} value={phoneCode.id}>11 - { phoneCode.state }</option>
											)
										})}
									</select>
								</div>

								<div className="col-6 mb-4">
									<label className="form-label" htmlFor="destination">Destino</label>

									<select onChange={ handleChangeDestinationPhoneId } className="form-select form--style-1" name="destination" id="destination">
										{phoneCodes.map((phoneCode) => {
											return (
												<option key={phoneCode.id} value={phoneCode.id}>11 - { phoneCode.state }</option>
											)
										})}
									</select>
								</div>

								<div className="col-6">
									<label className="form-label" htmlFor="duration">Duração da ligação</label>
									<div className="input-group">
										<input type="number" min={0} className="form-control form--style-1" id="duration" />
										<div className="input-group-text form--style-1">Minutos</div>
									</div>
								</div>

								<div className="col-6 align-items-end">
									<label className="form-label" htmlFor="result">Resultado</label>

									<div className="input-group">
										<input type="text" className="form-control form--style-1" readOnly id="result" />
										<span className="input-group-text form--style-1">
											R$
										</span>
									</div>
								</div>

								<div className="d-grid mt-4">
									<button type="submit" className="btn px-4 py-2 btn--style-2">Calcular</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingCalculator