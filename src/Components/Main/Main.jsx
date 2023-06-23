import React , {useEffect} from 'react'
import "./main.css";

import {HiOutlineLocationMarker} from "react-icons/hi";
import {HiOutlineClipboardCheck} from "react-icons/hi"

//-------importing images from assets.
import dallake from "../../Assets/dallake.jpg";
import img1    from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";

import Aos from "aos";
import 'aos/dist/aos.css';

//---------source data;
const Data = [
  {
    id:1,  
    imgSrc:dallake,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:2,  
    imgSrc:img1,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:3,  
    imgSrc:img2,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:4,  
    imgSrc:img3,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:5,  
    imgSrc:img4,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:6,  
    imgSrc:img5,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:7,  
    imgSrc:img6,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:8,  
    imgSrc:img7,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

  {
    id:9,  
    imgSrc:img8,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },
  {
    id:10,  
    imgSrc:img6,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },{
    id:11,  
    imgSrc:img6,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },{
    id:12,  
    imgSrc:img6,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },{
    id:13,  
    imgSrc:img6,
    destTitle:'Dal lake',
    location:'Shree Nagar',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.'
  },

]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 data-aos = "fade-left" className='title'>
            Most visited places..
          </h3>
        </div>

        <div className="secContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location, grade ,fees,description})=>{
              return(
                <div data-aos = "fade-up" key={id} className="singleDestination">
                 
                 <div className="imgDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">

                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker className="icon"/>
                      <span className='name'>{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>


                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button  data-aos = "fade-right"className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>

                  </div>
                </div>
              )
            })

          }

        </div>

    </section>
  )
}

export default Main