import React from 'react'

import './HeaderTop.css'

import { Container, Row, Col } from 'reactstrap';
import { FaRegEnvelope, FaRegClock, FaLocationArrow } from 'react-icons/fa';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const HeaderTop = () => (
    
    <header className="app-headerTop">

        <div>
            <Row className="app-headerTop__message">
                <Col >

                    <div>
                        <spam className="app-icon"><FaLocationArrow className="app-color" size={25} /></spam>
                        <p className="app-header__margen">Avenida Pequeno Príncipe, 0 - Campeche</p>
                        <p className="app-sub">Florianópolis/SC</p>
                    </div>
                </Col>
                <Col  sm={4}>
                    <div>
                        <spam className="app-icon"><FaRegClock className="app-color" size={25} /></spam>
                        <p className="app-header__margen">Seg/Sex: 09:00h - 18.00h</p>
                        <p className="app-sub">Sáb/Dom: Plantão</p>
                    </div>
                </Col>
                <Col  sm={3}>

                    <div>
                        <spam className="app-icon"><FaRegEnvelope className="app-color" size={25} /></spam>
                        <p className="app-header__margen">contato@minhamob.com.br</p>
                        <p className="app-sub">+ 55(48)3322-1234</p>
                    </div>
                </Col>
            </Row>
        </div>   

    </header>
)

export default HeaderTop