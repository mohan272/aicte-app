import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
} from 'mdb-react-ui-kit';
import './Navbar.css'
import AppBar from '@mui/material/AppBar';
import SearchAppBar from './Search'

export default function Menu() {
  return (
    <AppBar position="static" >
      <MDBNavbar expand='lg' light bgColor='main' id='container'>
        <MDBContainer>

            <div className='collapse navbar-collapse' id='navbarExample01'>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                <MDBNavbarItem active><MDBNavbarLink aria-current='page' href='#'>HOME</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>ABOUT US</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>NEWSROOM</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>BUREAUS</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>INITIATIVES</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>SCHEMES</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>EDUCATION</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>OPPORTUNITIES</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>STATISTICS</MDBNavbarLink></MDBNavbarItem>
                <MDBNavbarItem><MDBNavbarLink href='#'>BULLETINS</MDBNavbarLink></MDBNavbarItem>
                </MDBNavbarNav>
            </div>
            <div className='search'>
            <SearchAppBar/>
            </div>
        </MDBContainer>
      </MDBNavbar>
    </AppBar>
  );
}


