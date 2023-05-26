import React from 'react'
import "./contact.css";
import Nav from '../nav/nav'
const Contact = () => {
  return (
    <>
    {/* <Nav/> */}
    <div className="contact-contanier">
        <div className="contact-main">
          
          <form action="">
            <h1>CONTACT US</h1>


<input placeholder='FirstName' type="text"  required  /><br />

<input placeholder='LastName'  type="text"   required /><br />

<input placeholder='Religion' type="text"   required/><br />

<input  placeholder='Gmail'type="text"  required/><br />



<div className="btncontanier"><button>SUBMIT</button></div>



<p>Note : you can gmail about what do you want to ask.</p>
          </form>

        </div>
    </div>
    
    
    </>
  )
}

export default Contact
