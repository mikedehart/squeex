import React, { Component } from 'react';

/* React imports */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/* Images/assets */
import ladies from '../../img/ladies.png';

/* Misc */
let messages = require('../../data/messages');



class Names extends Component {
	constructor(props) {
		super(props);

		this.uName = React.createRef();

		this.handleMessage = this.handleMessage.bind(this);

		this.state = {
			message: 'Bazinga!'
		}

	}

	uName = React.createRef();


	handleMessage() {
		let user = this.uName.current.value;
		console.log(messages.length);
		let rNum = Math.floor(Math.random() * 9);
		let msg = messages[rNum];
		let x = msg.replace('NAME', user);
		this.setState({
			message: x
		});
	}


	render() {
		return(
			<Container className="name_cnt">
				<h2>Squeex says your name!</h2>
				<Row className="name_row">
					<Col className="name_col1">
						<div className="right-point"></div>
						<p>{this.state.message}</p>
					</Col>
					<Col className="name_col2">
						<img src={ladies} alt="HOO LEEE" />
					</Col>
				</Row>
				<Row className="name_input_row">
					<Col className="name_input">
						Name: <input ref={this.uName} placeholder="squeexcel38" /> <Button onClick={this.handleMessage} variant="danger">Squeex Me!</Button>
					</Col>
				</Row>

			</Container>
		);
	}
	
}

export default Names;