import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
const IndexPage =()=>{

    return(

        <div>
            <Header/>
            <h1>
                HAHAHAHA
            </h1>
            <h3> NEED a developer? <Link to='/contact'>contact me</Link> </h3>
<Footer/>
        </div>
    )
}

export default IndexPage