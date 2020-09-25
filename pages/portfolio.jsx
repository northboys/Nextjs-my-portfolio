import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Portfolio</h1>
			      <p className="description">
			      	Example landing page from dribbble.
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/web1.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Landing Page</h4>
			      		<div className="portfolio-category">Web Dev</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/web3.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Landing Page</h4>
			      		<div className="portfolio-category">Web Dev</div>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}
export default Portfolio;