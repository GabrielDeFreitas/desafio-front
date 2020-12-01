import React from 'react'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => (
    <footer>

        <div className="app-footer__news text-center">
            <div className="app-footer__message">
                <h3 style={{ fontWeight: "bold" }}>Quer ficar por dentro das novidades ?</h3>
                <p className="app-footer__text">Deixe o seu nome e seu e-mail nos campos abaixo e nós vamos lher informar</p>
                <p>sobre os melhores negócios e todos os lançamentos do sul da ilha</p>
            </div>
            <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div>
                        <Form>
                            <FormGroup className="">
                                <Input type="name" name="name" id="nameUser" placeholder="Digite seu nome" />
                            </FormGroup>
                            <FormGroup className="">
                                <Input type="email" name="email" id="emailUser" placeholder="Digite seu e-mail" />
                            </FormGroup>
                            <Button className="app-button" color="danger" size="lg" block>Me avise!</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>

        <div className="app-background">
            <Container>
                <Row>
                    <Col xs="3">
                        <h4 className="app-footer__conteudo" style={{ fontWeight: "bold" }}>Navegue<spam className="app-footer__conteudoSub"> Aqui!</spam></h4>
                        <hr className="app-footer__hr" />
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/destaque">Destaque</Nav.Link>
                            <Nav.Link eventKey="">Alugar</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>Comprar</Nav.Link>
                            <Nav.Link >Contato</Nav.Link>
                        </Nav>

                    </Col>

                    <Col xs="6">
                        <h4 className="app-footer__conteudo" style={{ fontWeight: "bold" }}>Nos<spam className="app-footer__conteudoSub"> Conheça!</spam> </h4>
                        <hr className="app-footer__hr" />
                        <p className="app-footer__conteudo">
                            Nossa maior satisfação é lhe ajudar a encontrar seu imóvel dos sonhos nos bairros do Sul da Ilha da Magia, em Florianópolis.
                        </p>

                        <h4 className="app-footer__conteudo" style={{ fontWeight: "bold" }}>Quer<spam className="app-footer__conteudoSub"> Investir?</spam> </h4>
                        <hr className="app-footer__hr" />
                        <p className="app-footer__conteudo">
                            Entre em contato com a nossa equipe e vamos lhe informar sempre sobre os melhores negócios.
                        </p>

                    </Col>

                    <Col>
                        <div>
                            <Button className="app-button" color="danger"><FaFacebookSquare /></Button>{' '}
                            <Button className="app-button" color="danger"><FaTwitter /></Button>{' '}
                            <Button className="app-button" color="danger"><FaInstagram /></Button>{' '}
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>

        <div className="app-footer">
            <p className="app-footer__message2 text-center">
                Imobiliária | CRECI 1234 | Avenida Pequeno Príncipe, 0 - Campeche Floripa/SC
            </p>
        </div>
    </footer>
)

export default Footer