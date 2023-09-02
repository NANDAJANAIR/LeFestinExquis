import React, { useState } from 'react';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';




export default function App({img,name,description,options}) {

  return (
    <MDBCardGroup className= "mt-5">
      <MDBCard>
        <MDBCardImage className='foodimage' src={img} alt='...' position='top'/>
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>
            {description}
            <br></br>
            <select className="dropdown-dark mx-3">
            {Array.from(Array(6),(e,i)=>{
              return(
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
            </select>
            <select>
            <option value={options.half}>Half</option>
            <option value={options.full}>Full</option>
            </select>
         
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>


    </MDBCardGroup>
  );
}