import React from 'react'

import Home from './component/home/home';
import Book from './component/books/book';
import About from './component/about/about';
import Contact from './component/contact/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
   <>
   <BrowserRouter>

   <Routes>
<Route path='/' element={<Home/>}>
<Route path='book' element={<Book/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
</Route>
   </Routes> 
   </BrowserRouter>
   
   
   
   </>
  )
}

export default App


