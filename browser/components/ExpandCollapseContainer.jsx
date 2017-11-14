import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';

import ExpandCollapseItem from './ExpandCollapseItem';

export default class ExpandCollapseContainer extends Component {
	constructor() {
		super() 
		this.state = {
			expandedItem: 'first'
		}

		this.toggleItem = this.toggleItem.bind(this);
	}

	toggleItem(evt) {
		let id = evt.target.parentNode.parentNode.id
		this.setState({expandedItem: id})
	}

	render() {
		return (
			<div className="expand-collapse-container">
				<ExpandCollapseItem id="first" expandedItem={this.state.expandedItem} toggleItem={this.toggleItem} />
				<hr />
				<ExpandCollapseItem id="second" expandedItem={this.state.expandedItem} toggleItem={this.toggleItem} />
				<hr />
				<ExpandCollapseItem id="third" expandedItem={this.state.expandedItem} toggleItem={this.toggleItem} />
			</div>
		)
	}
}
