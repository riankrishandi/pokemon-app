import React, { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CustomLink from './CustomLink'

function MainNav() {
  const [showNavbar, setShowNavbar] = useState(false)

  function toggleNavbar() {
    setShowNavbar(prev => !prev)
  }

  function closeNavbar() {
    setShowNavbar(false)
  }

  return (
    <StyledNavbar
      expanded={showNavbar}
      collapseOnSelect
      bg="dark"
      expand="lg"
      variant="dark"
    >
      <Container fluid="lg">
        <Link href="/" passHref>
          <Navbar.Brand className="mr-auto">
            Pokemon
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNavbar}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <CustomLink href="/">
              <a className="nav-link" onClick={closeNavbar}>
                Home
              </a>
            </CustomLink>
            <CustomLink href="/my-pokemon">
              <a className="nav-link" onClick={closeNavbar}>
                My Pokemon
              </a>
            </CustomLink>
            <CustomLink href="/about">
              <a className="nav-link" onClick={closeNavbar}>
                About
              </a>
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  )
}

const StyledNavbar = styled(Navbar)`
  background-color: #ef5350 !important;
`

export default MainNav