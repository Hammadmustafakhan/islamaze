import React from 'react'
import "./about.css";
import Nav from '../nav/nav'
const About = () => {
  return (
<>
{/* <Nav/> */}
<div className="aboutsection">
    <h1>ABOUT US </h1>
    <div className="main-contanier2">

            <div className="text-contanier2">
                <p className='home-text2'>
Welcome to our Islamic website, a digital platform dedicated to promoting knowledge,Our dedicated team of knowledgeable scholars, researchers, and writers endeavors to present Islamic teachings in a clear, accessible, and engaging manner. We are committed to upholding accuracy, integrity, and authenticity in all our content, drawing from trusted sources and scholarly expertise</p>
            </div>
            <div className="image-container">
                <img className='muslimm-img2' src="/img/about.png" alt="" />
            </div>
        </div>
    </div>
</>
  )
}

export default About
