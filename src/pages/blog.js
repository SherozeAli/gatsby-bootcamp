import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const BlogPage =()=>{

    return(

        <Layout>
        <h1>
            BLOGS PAGE 
        </h1>
        <h2><Link to='/contact'>go to contact  </Link></h2>
    </Layout>
    )
}

export default BlogPage