import React from 'react';

import NavBar from './NavBar';
import SubNav from './SubNav';
import ProductContainer from './ProductContainer';
import Footer from './Footer';

import '../styles/style.scss';
import logo from '../../public/assets/logo.png';

const Page = () => {
	return (
		<div>
			<div className="header">
				<img src={ logo } />
			</div>
			<NavBar />
			<SubNav />
			<ProductContainer />
			<Footer />
		</div>
	)
}

export default Page;
