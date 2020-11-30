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
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FaSearch, FaArrowDown } from "react-icons/fa"

const Home = () => (
    <>
        <HeaderTop />
        <Header />

        <div className="app-destaque">
            <div className="app-destaque__text">
                <div>
                    <h1 className="app-text" style={{ fontWeight: "bold" }}>Encontre o imóvel ideal</h1>
                    <h1 className="app-text" style={{ fontWeight: "bold" }}>Para você e sua família</h1>
                    <h1 className="app-text" style={{ fontWeight: "bold" }}>Morar na Praia!</h1>
                </div><br />
                <div>
                    <Button color="danger">Quero <spam style={{ fontWeight: "bold" }}>Alugar!</spam></Button>{' '}
                    <Button color="danger">Quero <spam style={{ fontWeight: "bold" }}>Comprar!</spam></Button>{' '}
                </div>
            </div>
        </div>


        <Container>

            <div className="container">
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>Comprar ou Alugar?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>O que você quer ?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>Qual tipo do imóvel ?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <Col>
                                <Label style={{ fontWeight: "bold" }}>Onde você quer ?</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
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

            <div className="container app-container__alugar">
                <div>
                    <h1 className="text-center" style={{ fontWeight: "bold" }}>Ambiente no seu <spam className="app-text">estilo</spam> </h1>
                    <h4 className="text-center app-iptu__h5">Encontre o imóvel com a experiência que você quer viver</h4><br />
                    <hr />
                    <br /><CardColumns>
                        <Card inverse >
                            <CardImg width="100%" src="https://i0.wp.com/blog.movingimoveis.com.br/wp-content/uploads/2018/07/apartamento-em-cobertura-quais-as-vantagens-e-desvantagens.jpeg?fit=2000%2C1333&ssl=1" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5" className="text-center">Cobertura</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://i0.wp.com/blog.movingimoveis.com.br/wp-content/uploads/2018/07/apartamento-em-cobertura-quais-as-vantagens-e-desvantagens.jpeg?fit=2000%2C1333&ssl=1" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5" className="text-center">Condimínio Fechado</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://i0.wp.com/blog.movingimoveis.com.br/wp-content/uploads/2018/07/apartamento-em-cobertura-quais-as-vantagens-e-desvantagens.jpeg?fit=2000%2C1333&ssl=1" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5" className="text-center">Alto Padrão</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5" className="text-center">Compacto</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5" className="text-center">De frente para o Mar</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5" className="text-center">Lojas e Salas</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </CardColumns><br />
                </div>
            </div>

            <div className="container">
                <h1 className="app-text" style={{ fontWeight: "bold" }}>À Venda <spam><a href="url">Ver mais</a></spam></h1>
                <hr />
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src="https://cf.bstatic.com/images/hotel/max1024x768/136/136609367.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-text" style={{ fontWeight: "bold" }}>Linda Casa no Rio Tavares com vista para o Mar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche</CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText>
                            <Button color="danger" block>Ver Imóvel</Button><br />
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row xs="1" sm="2" md="4">
                                <Col>1</Col>
                                <Col>2</Col>
                                <Col>3</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://cf.bstatic.com/images/hotel/max1024x768/136/136609367.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-text" style={{ fontWeight: "bold" }}>Linda Casa no Rio Tavares com vista para o Mar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche</CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText>
                            <Button color="danger" block>Ver Imóvel</Button><br />
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row xs="1" sm="2" md="4">
                                <Col>1</Col>
                                <Col>2</Col>
                                <Col>3</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://cf.bstatic.com/images/hotel/max1024x768/136/136609367.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-text" style={{ fontWeight: "bold" }}>Linda Casa no Rio Tavares com vista para o Mar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche</CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText>
                            <Button color="danger" block>Ver Imóvel</Button><br />
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row xs="1" sm="2" md="4">
                                <Col>1</Col>
                                <Col>2</Col>
                                <Col>3</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </CardDeck>
            </div><br />


            <div className="container app-container__alugar">
                <div>
                    <h1 className="app-text" style={{ fontWeight: "bold" }}>Para Alugar <spam><a href="url">Ver mais</a></spam></h1>
                    <hr />
                </div>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src="https://cf.bstatic.com/images/hotel/max1024x768/136/136609367.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-text" style={{ fontWeight: "bold" }}>Linda Casa no Rio Tavares com vista para o Mar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche</CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText>
                            <Button color="danger" block>Ver Imóvel</Button><br />
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row xs="1" sm="2" md="4">
                                <Col>1</Col>
                                <Col>2</Col>
                                <Col>3</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://cf.bstatic.com/images/hotel/max1024x768/136/136609367.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-text" style={{ fontWeight: "bold" }}>Linda Casa no Rio Tavares com vista para o Mar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche</CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText>
                            <Button color="danger" block>Ver Imóvel</Button><br />
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row xs="1" sm="2" md="4">
                                <Col>1</Col>
                                <Col>2</Col>
                                <Col>3</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://cf.bstatic.com/images/hotel/max1024x768/136/136609367.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="app-text" style={{ fontWeight: "bold" }}>Linda Casa no Rio Tavares com vista para o Mar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: "bold" }}>Imóvel Residencial</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Apartamento - Campeche</CardSubtitle>
                            <CardText tag="h3" className="app-text" style={{ fontWeight: "bold" }}>R$: 400.000,00</CardText>
                            <Button color="danger" block>Ver Imóvel</Button><br />
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Row xs="1" sm="2" md="4">
                                <Col>1</Col>
                                <Col>2</Col>
                                <Col>3</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </CardDeck>
            </div><br />

        </Container>
        <Footer />
    </>
)

export default Home