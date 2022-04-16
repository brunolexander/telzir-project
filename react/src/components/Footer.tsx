import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import logo from '../assets/img/logo.png'
import IFooter from '../interfaces/IFooter'

const Footer = ({ 
    onClickFeaturedPlans, 
    onClickPricingCalculator, 
    onClickFaq, 
    onClickContact, 
    onClickHome
}: IFooter): JSX.Element => (

    <footer className="text-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div style={{ height: '50px', backgroundColor: '#1f2330' }}></div>
                </div>
            </div>
        </div>

        <div style={{ backgroundColor: '#181c28' }}>
            <div className="container">
                <div className="row justify-content-center justify-content-sm-between justify-content-md-between align-items-start">
                    <div className="col-lg-4">
                        <div className="pb-5 mb-3 mb-lg-0 px-5" style={{ backgroundColor: '#1f2330' }}>
                            <img src={logo} alt="Telzir" className="footer-logo" />

                            <div className="text-muted my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsam accusantium reprehenderit numquam.</div>

                            <ul className="list-unstyled">
                                <li className="mb-2 text-capitalize">
                                    <FontAwesomeIcon icon="location-dot" className="me-2 icon--1" fixedWidth />
                                    Lorem ipsum, 123 - adipisicing
                                </li>
                                <li className="mb-2 ">
                                    <FontAwesomeIcon icon="envelope" className="me-2 icon--1" fixedWidth />
                                    suporte@email.com
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="phone" className="me-2 icon--1" fixedWidth />
                                    (99) 9999 9999
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-auto pt-40 pt-lg-80">
                        <h5>Navegação</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <FontAwesomeIcon icon="chevron-right" className="fa-xs me-3" style={{ color: '#6C41FF' }} />
                                <button className="btn btn-link footer-link" onClick={() => { onClickHome && onClickHome() }}>Home</button>
                            </li>
                            <li className="mb-2">
                                <FontAwesomeIcon icon="chevron-right" className="fa-xs me-3" style={{ color: '#6C41FF' }} />
                                <button className="btn btn-link footer-link" onClick={() => { onClickFeaturedPlans && onClickFeaturedPlans() }}>Planos</button>
                            </li>
                            <li className="mb-2">
                                <FontAwesomeIcon icon="chevron-right" className="fa-xs me-3" style={{ color: '#6C41FF' }} />
                                <button className="btn btn-link footer-link" onClick={() => { onClickPricingCalculator && onClickPricingCalculator() }}>Simular</button>
                            </li>
                            <li className="mb-2">
                                <FontAwesomeIcon icon="chevron-right" className="fa-xs me-3" style={{ color: '#6C41FF' }} />
                                <button className="btn btn-link footer-link" onClick={() => { onClickFaq && onClickFaq() }}>Perguntas frequentes</button>
                            </li>
                            <li className="mb-2">
                                <FontAwesomeIcon icon="chevron-right" className="fa-xs me-3" style={{ color: '#6C41FF' }} />
                                <button className="btn btn-link footer-link" onClick={() => { onClickContact && onClickContact() }}>Fale Conosco</button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto pt-40 pt-lg-80">
                        <h5>Newsletter</h5>
                        <div className="input-group bg-white p-2 rounded">
                            <input type="email" className="form-control form-control-sm shadow-none border-0" placeholder="Seu endereço de e-email" />
                            <button type="button" className="btn btn-secondary">Inscrever-se</button>
                        </div>
                        <div className="text-muted mt-3 mb-5">Receba as últimas notícias e atualizações</div>

                        <ul className="list-unstyled social justify-content-between justify-content-md-start">
                            <li className="me-3"><a className="social-link" href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} fixedWidth size="lg" /></a></li>
                            <li className="me-3"><a className="social-link" href="#"><FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth size="lg" /></a></li>
                            <li className="me-3"><a className="social-link" href="#"><FontAwesomeIcon icon={['fab', 'instagram']} fixedWidth size="lg" /></a></li>
                            <li className="me-3"><a className="social-link" href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth size="lg" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-5" style={{ borderTop: '1px solid #A0AABA2B' }}></div>

                <div className="py-4 row align-items-center justify-content-between">

                    <div className="col-auto">
                        <div className="text-muted small">
                            Desenvolvido por <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/bruno-alexander-0b6816207/">Bruno Alexander</a>
                        </div>
                    </div>

                    <div className="col-auto">
                        <div className="text-muted small">
                            &copy; 2022 Telzir. Todos os direitos reservados.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer