import React, { Component } from 'react';

import ExpandCollapseItem from './ExpandCollapseItem';

export default class ExpandCollapseContainer extends Component {
	constructor() {
		super() 
		this.state = {
			first: false,
			second: false,
			third: false
		}

		this.toggleItem = this.toggleItem.bind(this)
	}

	toggleItem(evt) {
		console.log('Toggled!', evt.target.parentNode.parentNode)
		let id = evt.target.parentNode.parentNode.id
		let nextState = !this.state[id]
		this.setState({[id]: nextState})
		console.log('this.state', this.state)
	}

	render() {
		return (
			<div className="expand-collapse-container">
				<ExpandCollapseItem id="first" show={this.state.first} toggleItem={this.toggleItem} />
				<hr />
				<ExpandCollapseItem id="second" show={this.state.second} toggleItem={this.toggleItem} />
				<hr />
				<ExpandCollapseItem id="third" show={this.state.third} toggleItem={this.toggleItem} />
			</div>
		)
	}
}
