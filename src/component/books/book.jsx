import React from 'react'
import "./book.css";
import Nav from '../nav/nav'
const Book = () => {
  return (
<>
{/* <Nav/> */}
<div className="contanier">
<h1 className='book-main-heading'>The Divine Revelations: Quran and Hadith</h1>
    <div className="book-contanier">
      <div className="qur-contanier">
        <img className='qur-img' src="/img/quraan.png" alt="" />
<p>
The Quran, a divine revelation of unparalleled wisdom, illuminates the path of humanity. Its verses resonate with profound meaning, offering solace, guidance, and enlightenment to those who seek its truth.
</p>

      </div>
      <div className="qur-contanier">
        <img className='qur-img'  src="/img/hadees.png" alt="" />
        <p>
Hadith, the collection of sayings and actions of the Prophet Muhammad, serves as a valuable supplement to the Quran, offering practical guidance and insight into the application of its teachings.
</p>
      </div>
    </div>
</div>

</>
  )
}

export default Book
