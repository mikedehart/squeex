import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppContainer extends Component {
	//Set initial state
	constructor(props) {
		super(props);


	}

	render() {
		return(
			<div className="container">
				<h1>Hello World</h1>
			</div>
		);
	}
}

AppContainer.propTypes = {

};

export default AppContainer;