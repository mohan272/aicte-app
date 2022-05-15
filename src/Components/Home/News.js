import { MDBCardTitle ,MDBCardText, MDBCardBody , MDBCard , MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import './Carousel.css';

function News() {
  return (
    <MDBContainer>
    <MDBCard>
    <MDBCardBody className="news">
        <MDBCardTitle>Date: 25-Jul-2021</MDBCardTitle>
        <MDBCardText>Admission in B.Tech/BE course through Lateral Entry to 2nd year..<br /></MDBCardText>
    </MDBCardBody>
    <MDBCardBody className="news">
        <MDBCardTitle>Date: 25-Jul-2021</MDBCardTitle>
        <MDBCardText>Admission in B.Tech/BE course through Lateral Entry to 2nd year..<br/></MDBCardText>
    </MDBCardBody>

    </MDBCard>
    </MDBContainer>
  )
}

export default News