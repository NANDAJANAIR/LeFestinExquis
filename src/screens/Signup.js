import React, { useRef } from 'react'
import biryani from "../assets/biryani.jpg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const  Signup =  () => {
 const navigate = useNavigate()
  const name = useRef("")
  const email = useRef("")
  const password = useRef("")
  const location = useRef("")

  const handleSubmit= async () =>{
 try{
const res = await axios.post("http://localhost:5000/api/createuser",
{
name:name.current.value,  
email:email.current.value,  
password:password.current.value,  
location:location.current.value,  
})
 console.log(res)
 if(res.data==="success"){
  navigate("/login")}
 }
 catch(err)
 {
  console.log(err)
 }

  }
  return (
    
    <section className="vh-100" style={{ backgroundColor: "#edc8ff" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        ref={name}
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        ref={email}
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        ref={password}
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="form3Example4cd"
                        className="form-control"
                        ref={location}

                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Address
                      </label>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src={biryani}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
export default Signup


