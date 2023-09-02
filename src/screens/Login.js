import React  from 'react'
import { useRef } from 'react'
import './login.css'
import pizzapull1 from '../assets/pizzapull1.jpg'
import axios from 'axios'
import { Navigate, redirect, useNavigate } from 'react-router-dom'




const Login = () => {


  const navigate = useNavigate()
  
  const email = useRef("")
  const password = useRef("")


  const handleSubmit= async () =>{

 try{
const res = await axios.post("http://localhost:5000/api/loginuser",{email:email.current.value,password:password.current.value,})
 console.log(res)
 if(res.data==="success"){
  navigate("/")
 }
 else{
  alert('wrong credentials');
 }

 }
 catch(err)
 {
  console.log(err)
  alert('Try Logging In With Correct Credentials');
   }

  }








  return (
    <div>
    <section className="vh-100" style={{ backgroundColor: "#edc8ff" }}>
  <div className="container py-24 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src={pizzapull1}
                alt="login form"
                className="img-fluid"
                style={{ height: "960 px" , width: "643 px" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Login to your account
                  </h5>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                      ref={email}
                    />
                    <h5 className="form-label" htmlFor="form2Example17">
                      Email address
                    </h5>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                      ref={password}
                    />
                    <h5 className="form-label" htmlFor="form2Example27">
                      Password
                    </h5>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button" onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="./Signup" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>
                  <a href="#!" className="small text-muted">
                    Terms of use. 
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login
