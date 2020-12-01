import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderTop from '../components/headerTop'

import './Page.css'

import Image from 'react-bootstrap/Image'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, CardFooter, CardColumns } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { CardImgOverlay } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { FaSearch, FaArrowDown, FaLocationArrow} from "react-icons/fa"

const Home = () => (
    <>
        <HeaderTop />
        <Header />

        <div className="app-home">
            <Container>
                <Jumbotron className="app-home__conteudo">
                    <div>
                        <h1 className="app-text__home" style={{ fontWeight: "bold" }}>ENCONTRE O ÍMOVEL IDEAL</h1>
                        <h1 className="app-text__home" style={{ fontWeight: "bold" }}>PARA VOCÊ E SUA FAMÍLIA</h1>
                        <h1 className="app-text__home" style={{ fontWeight: "bold" }}>MORAR NA PRAIA!</h1>
                    </div>
                </Jumbotron>
                <div>
                    <Button color="danger" size="lg">Quero <spam style={{ fontWeight: "bold" }}>Alugar!</spam></Button>{' '}
                    <Button color="danger" size="lg">Quero <spam style={{ fontWeight: "bold" }}>Comprar!</spam></Button>{' '}
                </div>
            </Container>
        </div><br />

        <Container>
            <div className="container">
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>Comprar ou Alugar?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>O que você quer ?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>Qual tipo do imóvel ?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>Onde você quer ?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                    <option>Escolha...</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label>Filtro avançado</Label>{' '}<FaArrowDown />
                            </Col>
                        </FormGroup>
                    </Col>

                    <Col className="text-right">
                        <FormGroup >
                            <Col>
                                <Button color="danger"><FaSearch />{' '}Pesquisar</Button>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>

            </div>
        </Container>

        <div className="app-container__alugar">
            <div className="container">
                <h1 className="text-center" style={{ fontWeight: "bold" }}>Ambiente no seu <spam className="app-text">estilo</spam> </h1>
                <h4 className="text-center app-iptu__h5">Encontre o imóvel com a experiência que você quer viver</h4><br />
                <hr className="app-hd__home" />
                <br /><CardColumns>
                    <Card inverse>
                        <CardImg width="100%" className="app-card" src="https://investt.com.br/blog/wp-content/uploads/2019/02/Cobertura.jpg" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle tag="h5" className="text-center app-title">Cobertura</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card inverse>
                        <CardImg width="100%" className="app-card" src="https://morar.com.br/wp-content/uploads/2019/06/Aldeia-Imperial-Colatina-Morar-Construtora-5.jpg" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle tag="h5" className="text-center app-title">Condimínio Fechado</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card inverse>
                        <CardImg width="100%" className="app-card" src="https://morar.com.br/wp-content/uploads/2019/07/Apartamento-decorado-Vista-de-Vila-Velha-Morar-Construtora-1.jpg" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle tag="h5" className="text-center app-title">Alto Padrão</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card inverse>
                        <CardImg width="100%" className="app-card" src="https://morar.com.br/wp-content/uploads/2020/07/Vista-Jardim-Morar-Construtora-20.jpg" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle tag="h5" className="text-center app-title">Compacto</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card inverse>
                        <CardImg width="100%" className="app-card" src="https://www.sanglassrio.com.br/wp-content/uploads/2019/11/envidracamento-de-sacada.jpg" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle tag="h5" className="text-center app-title">De frente para o Mar</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card inverse>
                        <CardImg width="100%" className="app-card" src="https://joaoamericofotografia.com/wordpress/wp-content/uploads/2014/07/AndradeSilva-Adv-Jo%C3%A3o-Am%C3%A9rico-FOTOGRAFIA-64-1000x667.jpg" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle tag="h5" className="text-center app-title">Lojas e Salas</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </CardColumns><br />
            </div>
        </div>

        <div className="app-container__venda">
            <div className="container">
                <h1 className="app-text">À Venda <spam><a className="app-verMais2" href="">Ver mais</a></spam></h1>
                <hr className="app-hd__home" />
                <br />
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src="https://mariscalaluguel.com.br/storage/mariscalaluguel/4898047/grande.jpg?2019-01-26-105711" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-textCard">Casa com 3 quartos no Campeche com ótima vista</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche<FaLocationArrow/></CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText><br/>
                            <Button className="app-button" color="danger" block>Ver Imóvel</Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row className="text-center">
                                <Col></Col>
                                <Col>4</Col>
                                <Col>180 m²</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://i.pinimg.com/originals/27/64/64/276464f1506a095c6836ac1c4448c186.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-textCard">Casa com 3 quartos no Campeche com ótima vista</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Casa - Coqueiros<FaLocationArrow/></CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 350.000,00</CardText><br/>
                            <Button className="app-button" color="danger" block>Ver Imóvel</Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row className="text-center">
                                <Col>1</Col>
                                <Col>4</Col>
                                <Col>180 m²</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://s24938.pcdn.co/wp-content/uploads/2017/07/Francisco-Viana-Apartamento-Projetos-7-900x600.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-textCard">Apartamento no prédio XPTO com vista para a Lagoa </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Comercio/Industrial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Sala comercial - Itacurubi<FaLocationArrow/></CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 600.000,00</CardText><br/>
                            <Button className="app-button" color="danger" block>Ver Imóvel</Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row className="text-center">
                                <Col>1</Col>
                                <Col>4</Col>
                                <Col>180 m²</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </CardDeck>
            </div>
        </div>

        <div className="app-container__alugar">
            <div className="container">
                <h1 className="app-text">Para Alugar <spam><a className="app-verMais" href="">Ver mais</a></spam></h1>
                <hr className="app-hd__home" />
                <br />
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src="https://mariscalaluguel.com.br/storage/mariscalaluguel/4898047/grande.jpg?2019-01-26-105711" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-textCard">Casa com 3 quartos no Campeche com ótima vista</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche<FaLocationArrow/></CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText><br/>
                            <Button className="app-button" color="danger" block>Ver Imóvel</Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row className="text-center">
                                <Col>1</Col>
                                <Col>4</Col>
                                <Col>180 m²</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://i.pinimg.com/originals/27/64/64/276464f1506a095c6836ac1c4448c186.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-textCard">Casa com 3 quartos no Campeche com ótima vista</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Casa - Coqueiros <FaLocationArrow/></CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 350.000,00</CardText><br/>
                            <Button className="app-button" color="danger" block>Ver Imóvel</Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row className="text-center">
                                <Col>1</Col>
                                <Col>4</Col>
                                <Col>180 m²</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://s24938.pcdn.co/wp-content/uploads/2017/07/Francisco-Viana-Apartamento-Projetos-7-900x600.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-textCard">Apartamento no prédio XPTO com vista para a Lagoa </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Comercio/Industrial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Sala comercial - Itacurubi<FaLocationArrow/></CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 600.000,00</CardText><br/>
                            <Button className="app-button" color="danger" block>Ver Imóvel</Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row className="text-center">
                                <Col>1</Col>
                                <Col>4</Col>
                                <Col>180 m²</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </CardDeck>
            </div>
        </div>

        <Footer />
    </>
)

export default Home