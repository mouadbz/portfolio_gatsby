module.exports = {
  siteMetadata: {
    title: `Mouad bouzidi | Full stack developer`,
    description: `I’m Mouad, a 22 years old self-taught Full stack developer, from Morocco.`,
    author: `Mouad bouzidi`,
    siteUrl: 'https://mouad.dev',
    social: {
      twitter: 'mouad bouzidi',
      instagram: 'fidalgodev',
      linkedin: 'fidalgodev',
      youtube: 'Fidalgodev',
      facebook: 'fidalgodev',
      github: 'fidalgodev',
      email: 'hello@mouad.dev'
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.jpg`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-151884576-11',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      }
    },
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `400`, `400i`, `600`, `600i`, `700`]
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fidalgo | Front-end Developer`,
        short_name: `Fidalgo`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#127EB1`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-offline`
  ]
};
