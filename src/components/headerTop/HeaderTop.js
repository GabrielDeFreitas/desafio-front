import React from 'react'

import './HeaderTop.css'

import { Container, Row, Col } from 'reactstrap';
import { FaRegEnvelope, FaRegClock, FaLocationArrow } from 'react-icons/fa';

const HeaderTop = () => (
    <header className="app-headerTop">

        <Container>
            <Row className="app-headerTop__message">
                <Col>
                    <div>
                        <FaLocationArrow className="" size={22} />
                        <p className="app-header__margen">Avenida Pequeno Príncipe, 0 - Campeche</p>
                        <p className="app-sub">Florianópolis/SC</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <FaRegClock size={22} />
                        <p className="app-header__margen">Seg/Sex: 09:00h - 18.00h</p>
                        <p className="app-sub">Sáb/Dom: Plantão</p>
                    </div>
                </Col>
                <Col>

                    <div>
                        <FaRegEnvelope size={22} />
                        <p className="app-header__margen">contato@minhamob.com.br</p>
                        <p className="app-sub">+ 55(48)3322-1234</p>
                    </div>
                </Col>
            </Row>
        </Container>

    </header>
)

export default HeaderTop