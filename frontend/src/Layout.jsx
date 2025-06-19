import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Container from './components/Container/Container'
import Sidebar from './components/SIdebar/Sidebar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const layout = () => {
  return (
    <>
    <Container>
    <Header/>
    <Outlet/>
    </Container>
    <Sidebar/>
    <Footer/>

    </>
  )
}

export default layout