import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import minion from '../img/minions_dance1.gif';
import joel from '../img/joel-spinning.gif';

import Main from './pages/Main';
import KKona from './pages/KKona';
import FAQs from './pages/FAQs';
import Names from './pages/Names';
import Draw from './pages/Draw';


class MainContainer extends Component {
	constructor(props) {
		super(props);


		this.state = {
			current_page: this.props.current_page
		};

	}

	static getDerivedStateFromProps(nextProp, prevState) {
		if(nextProp.current_page !== prevState.current_page) {
			return { current_page: nextProp.current_page };
		} else {
			return null;
		}
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	if(prevProps.current_page !== this.state.current_page) {
	// 		this.props.;
	// 	}
	// }

	render() {
		return(
			<div className="maincontainer">
				<Row>
					<Col><h2>The Official Homepage of Squeex</h2></Col>
				</Row>
				<Row>
					<Col>
						<a href="https://www.twitch.tv/squeex">Twitch</a>
						<a href="https://twitter.com/squeex15/">Twitter</a>
						<a href="https://www.youtube.com/@Squeex">YouTube</a>
						<a href="http://squeex.shop">Store</a>
					</Col>
				</Row>
				<Row>
					<Col><img className="sq-minion" src={minion} alt="minion dancin" /></Col>
					<Col><img className="sq-joel" src={joel} height="70px" width="125px" alt="joel dancin" /></Col>
					<Col><img className="sq-minion" src={minion} alt="minion dancin" /></Col>
					<Col><img className="sq-joel" src={joel} height="70px" width="125px" alt="joel dancin" /></Col>
					<Col><img className="sq-minion" src={minion} alt="minion dancin" /></Col>
				</Row>
				{this.state.current_page === 'Main' ? <Main /> : null}
				{this.state.current_page === 'KKona' ? <KKona /> : null}
				{this.state.current_page === 'FAQs' ? <FAQs /> : null}
				{this.state.current_page === 'Draw' ? <Draw /> : null}
				{this.state.current_page === 'Names' ? <Names /> : null}
			</div>
		);
	}
}

MainContainer.propTypes = {
	current_page: PropTypes.string
};

export default MainContainer;