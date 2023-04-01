import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import handle from '../../img/squeex_handle.png';



const Names = () => {
	return(
		<Container className="name_cnt">
			<Row className="name_row">
				<Col className="name_col1">
					<p><span><img src={handle} alt="Squeex: "/></span>Oh my you so sexy big man Flirt</p></Col>
				<Col className="name_col2">
					<img src="" alt="HOO LEEE" />
				</Col>
			</Row>

		</Container>
	);
}

export default Names;