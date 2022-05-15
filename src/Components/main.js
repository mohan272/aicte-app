import React from 'react'
import Header from './Header/Header'
import Navbar from './Header/Navbar'
import App from './Home/Carousel'
import Quicklinks from './Home/Quicklinks'
import News from './Home/News'
import './Main.css'




function Main() {
  return (
    <>
    <Header />
    <Navbar />
    <div className='body'>
    <App />
    <Quicklinks/>
    <News/>
     {/*<Menu/>*/}
     </div>
    </>
  )
}

export default Main