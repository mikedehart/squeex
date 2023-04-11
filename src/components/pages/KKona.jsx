import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';


class KKona extends Component {

  	componentDidMount() {
		this.props.musicOn();
	}

	componentWillUnmount() {
		this.props.musicOff();
	}

	render() {
		return(
			<Container className="kkona_cont">
				<h4>Standing back and standing by...</h4>
			</Container>
		);
	}
}

KKona.propTypes = {
	musicOn: PropTypes.func,
	musicOff: PropTypes.func
};


export default KKona;