import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./header.css"

const Header = () => {
  return (
    <header className="background">
      <Navbar >
        <Container >
            <LinkContainer to="/description/Html">
                <Navbar.Brand>
                    HTML
                </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/description/Css">
                <Navbar.Brand>
                    CSS
                </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/">
                <Navbar.Brand className='bgMain'>
                    MAIN PAGE
                </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/description/javaScript">
                <Navbar.Brand>
                    JAVASCRIPT
                </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/description/React">
                <Navbar.Brand>
                    REACT
                </Navbar.Brand>
            </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header