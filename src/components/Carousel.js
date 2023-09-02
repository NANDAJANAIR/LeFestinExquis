import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade style={{objectFit:"contain !important",maxheight:"60vh !important" }}>
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <MDBInputGroup tag="form" className='d-flex w-auto mb-3  btn-success'>
          <input className='form-control' placeholder="Type something..." aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
    </div>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://source.unsplash.com/random/900×700/?burger'
        alt='...' style={{filter:"brightness(70%)"}}
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://source.unsplash.com/random/900×700/?biryani'
        alt='...' style={{filter:"brightness(70%)"}}
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://source.unsplash.com/random/900×700/?pizza'
        alt='...' style={{filter:"brightness(70%)"}}
      >
        
      </MDBCarouselItem>
      
    </MDBCarousel>
  );
}