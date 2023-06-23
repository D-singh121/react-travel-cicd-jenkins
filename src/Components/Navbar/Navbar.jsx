import React ,{useState} from 'react'
import "./navbar.css";
import {SiYourtraveldottv} from "react-icons/si"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"


 const Navbar = () =>  {

    //state management for toggele view control
    const [active, setActive] = useState('navBar')

    //-----function to hadle toggle navbar 
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    //------function for remove navbar
    const removeNavbar  = () =>{  
        setActive("navBar")
    } 
     
    return (
      <section className='navBarSection'>
        <header className='header flex'>

            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                <h1><SiYourtraveldottv className ="icon"/> D.Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navlists flex">
                    
                    <li className="navItem">
                        <a href="#" className='navLink'>Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className='navLink'>Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className='navLink'>About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className='navLink'>Shop</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className='navLink'>Pages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className='navLink'>Contacts</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className='navLink'>News</a>
                    </li>


                    <button className='btn'>
                    <a href='# '> Book Now</a>
                    </button>
                </ul>

                <div  onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className = "icon"/>
                </div>

            </div>
            
            
            <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className ="icon"/>
                </div>

        </header>

      </section>
    )
 }

 export default Navbar ;  