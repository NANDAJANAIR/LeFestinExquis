import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connect With Us On:</span>
        </div>

        <div>
          
         
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/nandaja_nair/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/nandaja-nair21' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/NANDAJANAIR' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h3 className='text-uppercase fw-bold mb-4'>
                Le Festin Exquis
              </h3>
              <p align="justify">
              Embark on a delectable journey of culinary delight with our exquisitely crafted food delivery website...  Immerse yourself in a symphony of flavors, where every dish is a masterpiece meticulously prepared by skilled artisans of gastronomy. From the comforting embrace of traditional favorites to the daring allure of avant-garde creations, our website unveils a curated selection that caters to every palate's desire.Indulge in a seamless experience that marries cutting-edge technology with the timeless art of gastronomy.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Other:</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Locate US On Google Map
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='./signup' className='text-reset'>
                  SignUp
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p align="justify">
                <MDBIcon icon="home" className="me-2" />
                10, Opp Central Bank, Netaji Cloth Market, Dr Moose Road, Thane(w), Mumbai - 400601
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                nandajanair21@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 7273626233
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Nandaja Nair
        </a>
      </div>
    </MDBFooter>
  );
}
