import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IPlan from '../interfaces/IPlan'
import { animate } from 'framer-motion'
import { useEffect } from 'react'
import Counter from './Counter'
import { useIntersectionObserver } from 'react-intersection-observer-hook'

interface test {
    t: number;
    a: number;
    b: number;
    c: number;
}
const Plan = ({ price, time, key_features, onClick }: IPlan): JSX.Element => {

    const [timeRef, { entry }] = useIntersectionObserver()
    const isTimeVisible = entry && entry.isIntersecting 

    return (
        <div className="col-9 col-md-6 col-lg">
            <div className="card mb-3 py-4 plan">
                <div className="card-body">

                    <div className="bg--style-1 mx-auto px-2 py-4 text-white rounded-circle text-center mb-4" style={{ width: '158px', height: '158px' }}>
                        <h6>Até</h6>
                        <h1 className="plan-minutes" data-value={ time } ref={ timeRef }>
                            { isTimeVisible ? (
                                     <Counter from={ 0 } to={ time }/>
                                ) : (
                                    time
                                )
                             }
                        </h1>
                        <h6>Minutos</h6>
                    </div>

                    <h4 className="text-center">FaleMais</h4>

                    <div className="d-flex mb-3 flex-row justify-content-center align-items-center">
                        <h2 className="text--style-1">R$ { price }</h2>
                        <span>/mês</span>
                    </div>

                    <ul className="ps-0 mb-4 list-group align-items-center justify-content-center text-truncate">
                        
                        { key_features.map((feature, index) => {
                            return (
                                <li key={ index } className="list-group-item">
                                    <FontAwesomeIcon icon="circle-check" size="lg" className="text--style-1 me-1" fixedWidth />
                                    { feature }
                                </li>
                            )
                        })}

                    </ul>

                    <div className="text-center d-grid d-md-block">
                        <button type="button" onClick={() => { onClick && onClick() }} className="btn px-5 py-3 btn--style-2">Simulação</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Plan