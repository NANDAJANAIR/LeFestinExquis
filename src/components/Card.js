import React, { useState } from 'react';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import { useDispatchCart } from './ContextReducer';



export default function App({img,name,description,options}) {
var price
  let dispatch = useDispatchCart();
 const[qty, setQty] = useState(1)
 const[size, setSize] = useState("")
  const handleAddToCart=async()=>{
await dispatch({type:"ADD_TO_CART",name:name,price:price,qty:qty })
  }
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
            <button onClick={handleAddToCart
            }><i class="fa-light fa-cart-shopping" style={{color: "#a9a5d9"}}></i></button>
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>


    </MDBCardGroup>
  );
}