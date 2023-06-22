import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import ProductDeatils from '../components/ProductDeatils/ProductDeatils'
import LoggedOut from '../loggedOut/LoggedOut'


function RouterLayout() {
  return (
        <>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/e-commerce-baisc-web-application' element={<Home/>}/>
                <Route path='/logout' element={<LoggedOut/>}/>
                <Route path='/product/:id' element={<ProductDeatils/>}/>
            </Routes>
            <Footer/>
        </Router>
        
        </>
  )
}

export default RouterLayout