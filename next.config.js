//const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
const withReactSvg = require('next-react-svg')


const path = require('path');


const nextConfig = {
	trailingSlash: false,
	poweredByHeader: false,
	publicRuntimeConfig: {
		APP_NAME: 'farrin-portfolio',
		API_DEVELOPMENT: 'http://localhost:3000',
		PRODUCTION: false
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	generateEtags: false,
	// images:{
	// 	domains:['res.cloudinary.com']
	// },
	webpack(config, options) {
		const {isServer} = options;
		config.resolve.alias = {
			...config.resolve.alias,
			'@components': path.resolve('./components'),
			'@public': path.resolve('./public'),
			'@utils': path.resolve('./utils'),
		};
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name]-[hash:8].[ext]',
						publicPath: (url) => {
							return `/_next/static/css/${url}`;
						},
						outputPath: `${isServer ? '../' : ''}static/css/`,
						esModule: false,
					},
				},
			],
		});
		config.module.rules.push({
			test: /\.csv$/,
			loader: 'csv-loader',
			options: {
				dynamicTyping: true,
				header: true,
				skipEmptyLines: true
			}
		});
		if (!isServer) {
			config.node = {
				fs: 'empty'
			}
		}
		return config;
	},
};


module.exports = withPlugins(
	[
		withImages,
		withReactSvg({
			include: path.resolve(__dirname, 'assets/svg')
		})],
	nextConfig
);
