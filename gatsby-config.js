module.exports = {
  siteMetadata: {
    title: `Jonas Bröms`,
    name: `Bröms`,
    siteUrl: `https://jonasbroms.com`,
    description: `Online Entrepreneur, Creative Director with coding skills`,
    hero: {
      heading: `Welcome to Jonas Bröms blog, a narrated story of my life.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jonasbroms`,
      },
      {
        name: `github`,
        url: `https://github.com/bromso`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jonasbroms`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jonas-broms/`,
      },
      {
        name: `facebook`,
        url: `https://facebook.com/jonasbroms`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonas Bröms`,
        short_name: `Bröms`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155262276-1",
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
  ],
};
