import React from 'react'
import './Header.css';
import logo from '../../../src/logo.svg';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import reset from "./font.svg";
import zoomout from "./font-decrease.svg";
import zoomin from '../Header/font-plus.svg'
import { Button } from '@mui/material';
import { MDBContainer } from 'mdb-react-ui-kit';
function Header() {
  return (
    <header>
      <MDBContainer>
      <div className='Header'>
      <div className="Header-top">
        <a
          className="App-link"
          href="https://www.aicte-india.org/"
          target="_self"
          rel="self"
        ><img src={logo} className="App-logo" alt="logo" /></a>
      </div>
      <div className="Header-topright">
          <menuass id="menu">
            <a href="tel:180 0425 1333">
              <CallIcon />
              Call Us
            </a>
            <a href="#">
              <LanguageIcon />
              Language
            </a>
            <a href="#">
              <img src={zoomin} className="App-logo" alt="font-plus" />
            </a>
            <a href="#">
              <img src={reset} className="App-logo" alt="font" />
            </a>
            <a href="#">
              <img src={zoomout} className="App-logo" alt="font-minus" />
            </a>
          </menuass>
          <Button id="login" variant="outlined" color="primary" target="_blank" href="#login">
            Login
          </Button>
          <Button id="register" variant="contained" color="primary" target="_blank" href="#register">
            Register
          </Button>
         
        </div>
        </div>

      </MDBContainer>
    </header>
  )
}

export default Header