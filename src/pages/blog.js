import React from "react"
import {Link,graphql,useStaticQuery} from 'gatsby'
import Layout from '../components/layout'

const BlogPage =({data:{allMarkdownRemark:{edges}}})=>{

    const data =useStaticQuery(graphql`
    {
        allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
           
          }
        }
      }
    }
    
    `)
    return(

        <Layout>
            {
                edges.map(({node:{frontmatter}})=>
                <ol>

         <li>   <h1>{frontmatter.title}</h1></li>
          <li>  <p>{frontmatter.date}</p></li>
            </ol>)
            }
      
    </Layout>
    )
}

export default BlogPage