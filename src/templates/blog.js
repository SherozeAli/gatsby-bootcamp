import React, { Component } from 'react';
import Layout from '../components/layout'
import {Link,useStaticQuery,graphql} from 'gatsby'

export const query = graphql`
query($slug:String){
    markdownRemark ( fields: {slug: {eq:$slug}}){
      frontmatter{
        title
        date
      }
      html
      fields{
        slug
      }
    }
  }

`

const BlogTemplate = ({data:{markdownRemark}}) => {
   
    return (
        <Layout>
<div>
            <h1>
                {markdownRemark.frontmatter.title}
            </h1>
            <h3>
                {markdownRemark.frontmatter.date}
            </h3>
            <div dangerouslySetInnerHTML={{__html:markdownRemark.html}}>

            </div>
        </div>

        </Layout>
        
      );
}
 
export default BlogTemplate;