import React , {useEffect} from 'react'
import './footer.css';
import vid3 from "../../Assets/vid3.mp4";
import {FiSend} from "react-icons/fi";
import {SiYourtraveldottv} from "react-icons/si";
import {FiTwitter} from "react-icons/fi";
import {FiYoutube} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {SiTripadvisor}from "react-icons/si";
import {FiChevronRight} from "react-icons/fi"

import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="footer ">
      <div className="videoDiv">
        <video src={vid3} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div   data-aos= "fade-up"   className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With us </h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button data-aos= "fade-up" className='btn flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <SiYourtraveldottv className="icon"/> D.Travel.
              </a>
            </div>

            <div className="footerParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel, id ipsam officiis velit laborum temporibus neque. Consequatur laboriosam mollitia similique earum ab!  
            </div>        

            <div data-aos="fade-left" className="footerSocials flex">
              <FiTwitter className="icon"/>
              <FiInstagram className="icon"/>
              <FiYoutube className="icon"/>
              <SiTripadvisor className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
              {/* //*-----group one */}
              <div data-aos = "fade-up" 
                  data-aos-duration ="2000"
                  className="linkGroup">
                <span className="groupeTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Service
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                   Pyments
                </li>

              </div>

                {/* //----group two */}
              <div data-aos = "fade-up" 
                   data-aos-duration="3000"
                 className="linkGroup">
                <span className="groupeTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Booking
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Rentcars
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  HostelWorld
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                   TripAdvisor
                </li>

              </div>

                {/* //------group three */}
                <div data-aos = "fade-up" 
                      data-aos-duration="4000"
                   className="linkGroup">
                  <span className="groupeTitle">
                    LAST MINUTE
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className ="icon"/>
                    Calofornia
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className ="icon"/>
                    Europe
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className ="icon"/>
                    London
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className ="icon"/>
                    Dubai
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className ="icon"/>
                    Ocenia
                  </li>

              </div>
          </div>

          <div className="footerLegle flex">
            <small data-aos="fade-up"  >BEST TRAVEL WEBSITE </small>
            <small  data-aos="fade-up"  >COPYRIGHT RESERVED - D.TECH 2023 </small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer