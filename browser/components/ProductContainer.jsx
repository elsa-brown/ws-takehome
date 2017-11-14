import React, { Component } from 'react';

import Breadcrumbs from './Breadcrumbs';
import Modal from './Modal';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

import products from '../utils/products'

export default class ProductContainer extends Component {
	constructor() {
		super()
		this.state = {
			color: 'French Blue',
			hero: '/assets/product-large-a.jpg',
			thumbnail: '/assets/product-small-a.jpg',
			showModal: false
		}

		this.selectProduct = this.selectProduct.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	selectProduct(evt) {
		let selected = products[evt.target.name]
		this.setState(
			{
				color: selected.color, 
				hero: selected.hero,
				thumbnail: selected.thumbnail
			}
		)
	}

	toggleModal() {
		console.log('toggle Modal!')
		let nextState = !this.state.showModal;
		this.setState({showModal: nextState})
	}

	render() {
		return (
			<div>
				<Breadcrumbs color={this.state.color} />
				<Modal thumbnail={this.state.thumbnail} toggleModal={this.toggleModal} showModal={this.state.showModal} />
				<div className="product-details col-sm-12">
					<ProductImage hero={this.state.hero} selectProduct={this.selectProduct} />
					<ProductDescription color={this.state.color} toggleModal={this.toggleModal} />
				</div>
			</div>
		)
	}
}

