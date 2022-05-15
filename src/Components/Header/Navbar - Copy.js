import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import SearchAppBar from './Search'
import './Navbar.css'
import { MDBContainer } from 'mdb-react-ui-kit';

const pages = ['HOME', 'ABOUT US', 'NEWSROOM', 'BUREAUS' , 'INITIATIVES' , 'SCHEMES' , 'EDUCATION' , 'OPPORTUNITIES' , 'STATISTICS' , 'BULLETINS'];

export default function Navbar() {
  return (
    
      <AppBar position="static" >
        <MDBContainer id='container'>
        <div id='items'>
          {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 0, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
        </div>
        <div>
        <SearchAppBar/>
        </div>
        </MDBContainer>
      </AppBar>
    
    
  );
}


