import React from 'react'
import Nav from '../nav/nav'
import About from '../about/about';
import Book from '../books/book';
import Contact from '../contact/contact';
import { Outlet } from 'react-router-dom';
import "./home.css";



const Home = () => {
  return (
    <>
    <div>
      <Nav/>
      <div className="container">
        <div className="main-contanier">
            <div className="text-contanier">
                <p className='home-text'>Discover the beauty, wisdom, and guidance of Islam as we delve into the teachings and principles that shape this rich and vibrant faith. Our website is dedicated to providing a comprehensive resource for Muslims and non-Muslims alike, seeking knowledge, inspiration, and a deeper understanding of Islam.</p>
            </div>
            <div className="image-container">
                <img className='muslimm-img' src="/img/muslim.jpeg" alt="" />
            </div>
        </div>  
      </div>
    </div>
  
      <Book/>
  <About/>
  <Contact/>
<Outlet/>
    </>
    
  )
}

export default Home
