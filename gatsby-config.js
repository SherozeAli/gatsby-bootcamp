module.exports = {

  siteMetadata:{
    title:'FULL-STACK bootcamp',
    author:'SHEROZE ALI'
  },
  plugins: [
    `gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,//source content from source system
    },
  },
  `gatsby-transformer-remark`,
]
}
