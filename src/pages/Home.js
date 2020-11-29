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

const Home = () => (
    <>
        <HeaderTop />
        <Header />
        <Container>

            <div className="container">
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <FormGroup >
                            <Label>Comprar ou Alugar?</Label>
                            <Col>
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
                            <Label>O que você quer ?</Label>
                            <Col>
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
                            <Label>Qual tipo do imóvel ?</Label>
                            <Col>
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
                            <Label>Onde você quer ?</Label>
                            <Col>
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
                    <Col xs="6">
                        Filtro avançado
                    </Col>
                    <Col xs="6">
                        <Button color="danger" block>Pesquisar</Button><br />
                    </Col>
                </Row>
            </div>
            <div className="container app-container__alugar">
                <div>
                    <h1 className="text-center" style={{ fontWeight: "bold" }}>Ambiente no seu <spam className="app-text">estilo</spam> </h1>
                    <h4 className="text-center app-iptu__h5">Encontre o imóvel com a experiência que você quer viver</h4><br/>


                    <br/><CardColumns>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card inverse>
                            <CardImg width="100%" src="https://system.soprojetos.com.br/files/601/project_page_e/COD_91_-_IMG_6.jpg?1491507590" alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle tag="h5">Card Title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </CardColumns><br/>
                </div>
            </div>

            <div className="container">
                <h1 className="app-text" style={{ fontWeight: "bold" }}>À Venda</h1>
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
                    <h1 className="app-text" style={{ fontWeight: "bold" }}>Para Alugar</h1>
                    <spam><a href="url">Ver mais</a></spam>
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
        {/*<Footer />*/}
    </>
)

export default Home