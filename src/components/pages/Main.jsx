import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import sheldance from '../../img/sheldon_dance.gif';



const Main = () => {
	return(
		<div class="home">
			<Row>
				<Col>
					<h3>Check out my stream highlights!</h3>
				</Col>				
			</Row>
			<Row>
				<Col>
					<img src={sheldance} alt="Sheldance!" />
				</Col>
				<Col xs={6}>
					<iframe width="672" height="378" src="https://www.youtube.com/embed/qyCUCeMGUz0?autoplay=1" title="Squeex Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</Col>
				<Col>
					<img src={sheldance} alt="Sheldance!" />
				</Col>
			</Row>
		</div>
	);
}

export default Main;