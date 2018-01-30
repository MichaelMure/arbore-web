module.exports = {
  siteMetadata: {
    title: 'Arbore - P2P social file sharing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-github`,
      options: {
        repository: "arbore",
        tree: false,
        releases: true,
        user: "MichaelMure",
      }
    }
  ],
};
