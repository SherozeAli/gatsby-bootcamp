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
            fields{
              slug
            }
           
          }
        }
      }
    }
    
    `)
    return(

        <Layout>
            {
                edges.map(({node:{frontmatter,fields:{slug}}})=>
                <ol>

              <li> 
                  <Link to={`/blog/${slug}`}>
                <h1> {frontmatter.title}</h1> 
                <p>{frontmatter.date}</p>
              </Link>
              </li>
                  </ol>
            )
            }
      
    </Layout>
    )
}

export default BlogPage