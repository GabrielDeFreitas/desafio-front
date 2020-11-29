import React from 'react'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => (
    <footer>
        {/*<div className="app-footer__news">
            <div className="app-footer__message">
                <h1>Quer ficar por dentro das novidades ?<Badge color="secondary"></Badge></h1>
                <p>Deixe o seu nome e seu e-mail nos campos abaixo e nós vamos lher</p>
                <p>informar sobre os melhores negócios e todos os lançamentos do sul da ilha</p>
            </div>

            <div>
            <Form>
                <FormGroup className="">
                    <Input type="name" name="name" id="nameUser" placeholder="Digite seu nome" />
                </FormGroup>
                <FormGroup className="">
                    <Input type="email" name="email" id="emailUser" placeholder="Digite seu e-mail" />
                </FormGroup>
                <Button color="primary" size="lg" block>Me avise!</Button>
                </Form>
            </div>

        </div>

        
        
    <div>
        <Container>
            <Row xs="1" sm="2" md="4">
                <Col><h3>Navegue<Badge color="secondary"> Aqui</Badge></h3>
                <ol>
                    <li><a href="#" title="Home">Home</a></li>
                    <li><a href="#" title="Destaque">Destaque</a></li>
                    <li><a href="#" title="Alugar">Alugar</a></li>
                    <li><a href="#" title="Comprar">Comprar</a></li>
                    <li><a href="#" title="Contato">Contato</a></li>
                </ol>
                
                </Col>

                <Col>
                    <h3>Nos<Badge color="secondary"> Conheça</Badge> </h3>
                    <Container>
                        <p>
                            Nossa maior satisfação é lhe ajudar a encontrar seu imóvel dos sonhos nos bairros do Sul da Ilha da Magia, em Florianópolis.
                        </p>
                    </Container>
                    <h3>Quer<Badge color="secondary"> Investir</Badge> </h3>
                    <Container>
                        <p>
                            Entre em contato com a nossa equipe e vamos lhe informar sempre sobre os melhores negócios.
                        </p>
                    </Container>
                </Col>

                <Col>
                <div>
                    <Button color="primary"></Button>{' '}
                    <Button color="primary"></Button>{' '}
                    <Button color="primary"></Button>{' '}
                </div>
                </Col>

            </Row>
       </Container>
        </div> */}

        <div className="app-footer">
            <span className="app-footer__message text-center">
                Imobiliária | CRECI 1234 | Avenida Pequeno Príncipe, 0 - Campeche Floripa/SC
            </span>
        </div>
    </footer>
)

export default Footer