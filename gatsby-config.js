module.exports = {
  siteMetadata: {
    title: "Graham Plata's | Digital Sandbox",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      }
    },
    'gatsby-transformer-remark'
  ],
}