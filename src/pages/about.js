import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage =()=>{

    return(

        <div>
            <Header/>
            <h1>
            ABOUT Page
            </h1>
         <h2>   <Link to='/contact'>go to contact page </Link>
         </h2> 
         <Footer/>
         </div>
    )
}

export default AboutPage