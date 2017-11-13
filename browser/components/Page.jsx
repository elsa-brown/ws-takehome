import React from 'react';

import NavBar from './NavBar';
//import Breadcrumbs from './Breadcrumbs';
import ProductContainer from './ProductContainer';
import Footer from './Footer';

import '../styles/style.scss';
import logo from '../../public/assets/logo.png';

const Page = () => {
	return (
		<div id="page">
			<div className="header">
				<img src={ logo } />
			</div>
			<NavBar />
			<div className="body-wrapper">
				<ProductContainer />
				<Footer />
			</div>
		</div>
	)
}

export default Page;
