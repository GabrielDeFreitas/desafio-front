import React from 'react'
import { Container } from 'react-bootstrap'

import Menu from '../menu'

import './Header.css'

const Header = () => (
    <header className="app-header">
        <Container>
        <Menu />
        </Container>
    </header>
)

export default Header