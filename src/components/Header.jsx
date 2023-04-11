import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import squeexsturdy from '../img/squeexsturdy.gif';

const Header = () => {
	return(
		<div className="header">
			<Row>
				<Col><img src={squeexsturdy} alt="sturdyboi" height="100px" width="100px" /></ Col>
				<Col xs md="auto"><h1>I'm Squeexin my Shit RN</h1></Col>
				<Col><img src={squeexsturdy} alt="sturdyboi" height="100px" width="100px" /></ Col>
			</Row>
		</div>
	);
}

export default Header;