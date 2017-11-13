import React, { Component } from 'react';

import Breadcrumbs from './Breadcrumbs';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

import products from '../utils/products'

export default class ProductContainer extends Component {
	constructor() {
		super()
		this.state = {
			color: 'French Blue',
			hero: '/assets/product-large-a.jpg'
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		let selected = products[evt.target.name]
		this.setState({color: selected.color, hero: selected.hero})
	}

	render() {
		return (
			<div>
				<Breadcrumbs color={this.state.color} />
				<div className="product-container col-sm-12">
					<ProductImage hero={this.state.hero} onClick={this.handleClick} />
					<ProductDescription color={this.state.color} />
				</div>
			</div>
		)
	}
}

