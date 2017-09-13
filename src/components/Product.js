import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {

	render() {
		return(
			<div>
				{this.props.name}
				{this.props.producer}
				{this.props.hasWatermark}
				{this.props.color}
				{this.props.weight}
			</div>
		);	
	}
}

Product.defaultProps = {
	hasWatermark: false
};


Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: (props, propName) => {
		const val = props[propName]

		if (val === undefined) {
			return new Error('weight prop is required')
		}

		if (val > 300 || val < 80) {
			return new Error('weight prop should be between 80 & 300')
		}

		if (isNaN(val)) {
			return new Error('weight prop must be a number')
		}
	}
};