import React from 'react'
import Navbar from './Navbar'
import store from './store'
import { Provider } from 'react-redux'
import Main from './Main'
import Footer from './Footer'


function Home() {
    return (
        <>
           
            <Navbar></Navbar>
          
                <Main></Main>
               <Footer></Footer>
        </>
    )
}

export default Home
