import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
                  Butuh sebuah website untuk keperluan bisnis, organisasi, atau personal? Kami punya solusinya.
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: izalulhaq@hotmail.com.com</li>
			      	<li className="contact-item">Phone: +6253348331108</li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}
export default Contact;