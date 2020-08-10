module.exports = {
	siteMetadata: {
		title: `Lizandro's 100 Days of Code`,
		description: `Hey I'm Lizandro(difo23)! I'm a Software Engineer completing the 100 Days of Code Challenge.`,
		author: `@difo23`,
		githubUrl: `https://github.com/difo23`,
		twitterUrl: 'https://twitter.com/lizandro23difo'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
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
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: '100 Days of Code Template',
				short_name: `template`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/me.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: []
			}
		},
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
				stylesProvider: {
					injectFirst: true
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
