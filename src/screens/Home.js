import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import About from "../components/About";
import Reviews from "../components/Reviews";
import hero from "../assets/hero.png";


const Home = () => {
  const [products, setproducts] = useState([]);

  const fetched_data = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/showallproducts");
      console.log(res.data.data);
      setproducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetched_data();
  }, []);

  const [cart, setCart] = useState([]);
  const addToCart = (i) => {
    // setproducts(state =>
    //   state.map((item, p) => {
    //     if (i === p) {
    //       setCart([...cart,
    //         { name: item.name, price: item.price, quantity: item.quantity }
    //       ]);
    //       return { ...item, inCart: true };
    //     }
    //     console.log(item);
    //     return  item;
    //   })
    // );
    console.log(i)
  };

  return (
    <div>
      <Navbar />
      <Carousel />
      <About />

      <section className="section1">
        <div></div>
      </section>

      <section className=" py-5  hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div class="col-lg-6 text-center text-lg-start">
              <p className="text-white animated slideInLeft xyz mb-4 pb-2">
                At our food delivery platform, we're passionate about connecting
                you with a diverse array of cuisines that cater to your every
                mood and taste. Our user-friendly interface ensures that your
                journey from selecting a meal to savoring it is smooth and
                enjoyable.
                <ul>
                  Here's what sets us apart:
                  <li>Vast Culinary Selection</li>
                  <li>Easy Ordering</li>
                  <li>Seamless Experience</li>
                </ul>
                Indulge in the ultimate food adventure without stepping out of
                your comfort zone. Explore, order, and relish delightful meals
                from your favorite restaurants, all from the convenience of your
                home. Join us today and let your taste buds embark on a
                sensational journey! With a mere tap of your elegant fingertips,
                unlock a world where palates are pampered and cravings are
                cherished. Traverse through an interface as sleek as a polished
                silver spoon, where each dish beckons with tantalizing allure.
                Our app's interface dances like a maestro, seamlessly guiding
                you through a cornucopia of culinary options......
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <p className="p2"></p>
              <img className="img-fluid" src={hero} alt=""></img>
            </div>
          </div>
        </div>
      </section>


      <section className="section3">
        <div></div>
      </section>

      
      <div className="bckabkhatamhogaimtired mx-auto">
        {products.map((i) => {
          return <Card name={i.name} description={i.description} img={i.img} options={i.options[0]}  />;
        })}
      </div>
      <Reviews />
    
      <Footer />
    </div>
  );
};

export default Home;
