import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import squeexsturdy from '../img/squeexsturdy.gif';

const Header = () => {
	return(
		<div className="header">
			<Row>
				<Col><img src={squeexsturdy} height="100px" width="100px" /></ Col>
				<Col xs md="auto"><h1>I'm squeexin my shit rn</h1></Col>
				<Col><img src={squeexsturdy} height="100px" width="100px" /></ Col>
			</Row>
{/*			<Row>
				<Col><h6>The <span>un</span>Official Website of Squeex</h6></Col>
			</Row>*/}
		</div>
	);
}

export default Header;