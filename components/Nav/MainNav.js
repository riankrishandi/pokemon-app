import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CustomLink from './CustomLink'

const StyledNavbar = styled(Navbar)`
  background-color: #ef5350 !important;
`

function MainNav() {
  return (
    <StyledNavbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Container fluid="lg">
        <Link href="/" passHref>
          <Navbar.Brand className="mr-auto">
            Pokemon
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <CustomLink href="/" passHref>
              <Nav.Link>
                Home
              </Nav.Link>
            </CustomLink>
            <CustomLink href="/my-pokemon" passHref>
              <Nav.Link>
                My Pokemon
              </Nav.Link>
            </CustomLink>
            <CustomLink href="/about" passHref>
              <Nav.Link>
                About
              </Nav.Link>
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  )
}

export default MainNav