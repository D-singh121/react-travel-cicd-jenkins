import React, {useEffect}from "react";
import "./home.css";
import vid2 from "../../Assets/vid2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiOutlineFilter } from "react-icons/hi";
//--------right app icons
import {FiFacebook} from "react-icons/fi"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {TbBrandTripadvisor} from "react-icons/tb"
//------left icons .
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"
//----- aos animation importing.
import Aos from "aos";
import 'aos/dist/aos.css';



const Home = () => {

  useEffect(()=>{
     Aos.init({duration:2000})
  },[]);


  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={vid2} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">Search Your Holiday</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city"> Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter your name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date"> Search your date:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter your date here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price"> Max price:</label>
              <h3 className="total">$5500</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5500" min="1000" />
            </div>
          </div>

          <div className="searchOption flex">
            <HiOutlineFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className= "icon"/>
            <AiOutlineWhatsApp className= "icon"/>
            <FiInstagram className= "icon"/>
            <TbBrandTripadvisor className= "icon"/>
          </div>

          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
