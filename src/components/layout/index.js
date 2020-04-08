import React from "react"
import { Link } from "gatsby"
import Header from '../header'
import Footer from '../footer'
import '../../../styles/index.scss'
import layoutStyles from './layout.module.scss'
const Layout =({children})=>{

    return(
<div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
<Header/>
      <div>
{children}
      </div>
      </div>
      <Footer/>
      </div>
    )
}

export default Layout