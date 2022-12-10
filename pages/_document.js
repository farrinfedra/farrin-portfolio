// write default nextjs _document.js using functional component

import {Html, Head, Main, NextScript} from 'next/document'

function MyDocument() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="description" content="Farrin Marouf Sofian's Portfolio"/>
				<meta name="author" content="Farrin Marouf Sofian"/>
				<meta name="keywords"
				      content="Farrin Marouf Sofian, Farrin Sofian, Farrin Marouf, Farrin, Portfolio,
				      AI Researcher, Software Engineer"/>
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	)
}

export default MyDocument
