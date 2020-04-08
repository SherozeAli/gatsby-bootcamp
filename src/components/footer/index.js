import React from "react"
import './footer.scss'
import {useStaticQuery,graphql} from 'gatsby'
const Footer =()=>{
const data=useStaticQuery(graphql`
query{
    site{
        siteMetadata{
            author
            title
        }
    }
}


`)
    return(

        <div>
            <h1>
            Footer
            </h1>
            <p>Created by { data.site.siteMetadata.author} </p>
        </div>
    )
}

export default Footer