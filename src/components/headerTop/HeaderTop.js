import React from 'react'

import './HeaderTop.css'

import { Container, Row, Col } from 'reactstrap';
import { FaRegEnvelope, FaRegClock, FaLocationArrow} from 'react-icons/fa';

const HeaderTop = () => (
    <header className="app-headerTop">

        <Container>
            <Row xs="3">
                <Col>
                    <FaLocationArrow/><spam className="app-headerTop__message">Avenida Pequeno Príncipe, 0 - Campeche Florianópolis/SC</spam>
                </Col>
                <Col>
                    <FaRegClock/><spam className="app-headerTop__message">Seg/Sex: 09:00h - 18.00h<br/>Sáb/Dom: Plantão</spam>
                </Col>
                <Col>
                    <FaRegEnvelope/><spam className="app-headerTop__message">contato@minhamob.com.br<br/>+ 55(48)3322-1234</spam>
                </Col>
            </Row>
        </Container>
        
    </header>
)

export default HeaderTop