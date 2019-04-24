import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

class NavigationBar extends Component {
  render() {
    const { setPage, page } = this.props;

    const Styles = styled.div`
      .navbar {
        background-color: transparent;
      }

      .navbar.solid {
        background-color: #222;
      }

      .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
          color: white;
        }
      }

      .navbar-brand, .navbar-nav .nav-link.active {
        color: white !important;
      }

      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
      }
    `;

    const navItems = ['Home', 'About', 'Process', 'Work', 'Projects', 'Contact'];

    return (
      <Styles>
        <Navbar 
          expand="lg" 
          fixed="top" 
          bg={page !== 'Home' ? 'dark' : ''} 
          variant={page !== 'Home' ? 'dark' : ''}
          className={page === 'home' ? 'home' : ''}
        >
          <Navbar.Brand href="/">
            <strong style={{color: 'white'}}>Joe LoMoglio</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {
                navItems.map((navItem, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link 
                      onClick={() => setPage(navItem)}
                      className={`
                        ${page === navItem ? 'active' : ''}
                        ${page !== 'Home' ? 'solid' : ''}
                      `}
                    >{navItem}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  };
};

export default NavigationBar;