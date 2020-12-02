import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderTop from '../components/headerTop'

import { Button } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Row } from 'reactstrap';

import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import Table from 'react-bootstrap/Table'

import { FaFacebookSquare, FaTwitter, FaInstagram, FaCheck, FaWhatsapp } from 'react-icons/fa';
//import { Map, GoogleApiWrapper } from 'google-maps-react';
//import { GoogleMap, LoadScript } from '@react-google-maps/api';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import Map from './Map';
import Credentials from './credentials';
//const urlMapa = `https://maps.googleapis.com/maps/api/js?v3.exp&key=${Credentials.mapsKey}`;

const urlMapa = `https://maps.googleapis.com/maps/api/js?key=${Credentials.mapsKey}&callback=initMap`;

const teste = 'alexandre'

const Destaque = () => (    
    <>
        <HeaderTop />
        <Header />

        <div className="app-destaque">
            <div className="app-destaque__text">
                <h1 className="app-text" style={{ fontWeight: "bold" }}>Linda Casa no Rio Tavares com vista para o Mar</h1>
                <p className="app-iptu__h5" style={{ fontWeight: "bold" }}>Imóvel Residencial - Apartamento - Campeche</p>
            </div>
        </div>

        <Container>
            <Container>
                <Row>
                    <Col xs="8">

                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://blog.wedy.com/wp-content/uploads/2019/09/como-escolher-eletrodomesticos-fogao-a-geladeira-07-700x471.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.diarioinduscom.com.br/wp-content/uploads/2020/11/mat1b-700x471.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i0.wp.com/revistainterarq.com.br/wp-content/uploads/2018/08/MGL8144-700x471.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i0.wp.com/revistainterarq.com.br/wp-content/uploads/2018/08/2_MGL8438-700x471.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                            <br /><div>
                                <p size="sm" className="app-iptu">IPTU: R$: 125,00</p>
                                <h5 className="app-iptu__h5">Valor do Aluguel: R$: 2.300,00/mês</h5>
                            </div>

                        </div><br />

                        <div>
                            <h3 className="app-text" style={{ fontWeight: "bold" }}>Conheça mais o imóvel</h3>
                            <p>Imóvel teste</p>
                        </div>

                        <div>
                            <h3 className="app-text" style={{ fontWeight: "bold" }}>Características</h3><br />
                            <Table striped bordered hover>
                                <thead>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="2">Dormitórios</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Suítes</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Banheiros</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Salas</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Garagem</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Garagem Coberta</td>
                                        <td>2r</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Área Total</td>
                                        <td>250 m²</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Área Útil</td>
                                        <td>180 m²</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </div><br />

                        <div>
                            <h3 className="app-text" style={{ fontWeight: "bold" }}>Estrutura</h3><br />
                            <Button className="app-button_estrutura" color="success"> <FaCheck /> Ar Condicionado</Button>{' '}
                            <Button className="app-button_estrutura" color="success"> <FaCheck /> Churrasqueira</Button>{' '}
                            <Button className="app-button_estrutura" color="success"> <FaCheck /> Despensa</Button>{' '}
                            <Button className="app-button_estrutura" color="success"> <FaCheck /> Escritório</Button>{' '}
                        </div><br />

                        <div>
                            <h3 className="app-text" style={{ fontWeight: "bold" }}>Localização</h3><br />
                            <div>
                            
                            <Map
                                googleMapURL= {urlMapa}
                                containerElement={<div style={{height: '400px'}}/>}
                                mapElement={<div style={{height: '100%'}}/>}
                                loadingElement= {<p>Carregando</p>}
                            />

                            </div>
                        </div>

                    </Col>

                    <Col xs="4">
                        <div>
                            <Button outline color="success" size="lg" className="app-form"><FaWhatsapp /> Converse com o Corretor!</Button>{' '}

                            <Card>
                                <CardHeader className="app-background__item1" style={{ fontWeight: "bold" }}>Entre em Contato</CardHeader>
                                <CardBody className="app-background__item2">

                                    <Form>

                                        <FormGroup row>

                                            <Col>
                                                <CardTitle style={{ fontWeight: "bold" }}>Seu nome:</CardTitle>
                                                <Input type="name" name="name" id="exampleName" placeholder="Informe seu nome completo" />
                                            </Col>

                                        </FormGroup>

                                        <FormGroup row>

                                            <Col>
                                                <CardTitle style={{ fontWeight: "bold" }}>Seu telefone:</CardTitle>
                                                <Input type="number" name="number" id="exampleNumber" placeholder="Informe seu telefone com DDD" />
                                            </Col>


                                        </FormGroup>

                                        <FormGroup row>

                                            <Col>
                                                <CardTitle style={{ fontWeight: "bold" }}>Seu e-mail:</CardTitle>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="Informe seu melhor e-mail" />
                                            </Col>

                                        </FormGroup>

                                        <FormGroup row>

                                            <Col>
                                                <CardTitle style={{ fontWeight: "bold" }}>Sua mensagem:</CardTitle>
                                                <Input className="app-textarea" type="textarea" name="text" id="exampleText" />
                                            </Col>

                                        </FormGroup>

                                        <Button className="app-button" color="danger" block>Enviar</Button><br />

                                        <CardText className="text-center app-text" style={{ fontWeight: "bold" }}>(48)3322-1234</CardText>


                                    </Form>
                                </CardBody>

                            </Card>


                            <div className="app-midia__button text-center">
                                <Button className="app-facebook" size="sm" color="primary"><FaFacebookSquare />{' '}Compartilhar 0</Button>{' '}
                                <Button className="app-twitter" size="sm" color="primary" href="#" ><FaTwitter />{' '}Twitter</Button>{' '}
                                <Button className="app-button" size="sm" color="danger"><FaInstagram />{' '}Instagram</Button>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </Container>
        <Footer />
    </>

)

export default Destaque;

  