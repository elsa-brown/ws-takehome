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
			showModal: false,
			price: 19.95,
			qty: 1
		}

		this.selectProduct = this.selectProduct.bind(this);
		this.toggleQty = this.toggleQty.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	selectProduct(evt) {
		let selected = products[evt.target.name]
		this.setState(
			{
				color: selected.color, 
				hero: selected.hero,
				thumbnail: selected.thumbnail,
				qty: 1
			}
		)
	}

	toggleQty(evt) {
		this.setState({qty: evt.target.value})
	}
 
	toggleModal() {
		let nextState = !this.state.showModal;
		this.setState({showModal: nextState})
	}

	render() {
		return (
			<div>
				<Breadcrumbs color={this.state.color} />
				<Modal 
					color={this.state.color}
					thumbnail={this.state.thumbnail}  
					showModal={this.state.showModal} 
					price={this.state.price} 
					qty={this.state.qty} 
					toggleModal={this.toggleModal}
				/>
				<div className="product-details col-sm-12">
					<ProductImage hero={this.state.hero} selectProduct={this.selectProduct} />
					<ProductDescription 
						color={this.state.color} 
						toggleQty={this.toggleQty}
						toggleModal={this.toggleModal} 
						qty={this.state.qty}
					/>
				</div>
			</div>
		)
	}
}

