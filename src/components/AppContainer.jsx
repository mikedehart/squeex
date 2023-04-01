import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TopNav from './TopNav';
import MainContainer from './MainContainer';
import Header from './Header';

import squeexsturdy from '../img/squeexsturdy.gif';


class AppContainer extends Component {
	constructor(props) {
		super(props);


		this.state = {
			current_page: 'Main'
		};

	}

	changePage(page) {
		this.setState({
			current_page: page
		});
	}

	handleMain = () => {
		this.setState({ current_page: 'Main' });
	};

	handleNames = () => {
		this.setState({ current_page: 'Names' });
	};

	handleKKona = () => {
		this.setState({ current_page: 'KKona' });
	};

	handleFAQs = () => {
		this.setState({ current_page: 'FAQs' });
	};

	handleDraw = () => {
		this.setState({ current_page: 'Draw' });
	};

	render() {
		return(
			<Container>
				<Header />
				<TopNav handleKKona={this.handleKKona}
						handleMain={this.handleMain}
						handleFAQs={this.handleFAQs}
						handleDraw={this.handleDraw}
						handleNames={this.handleNames} />
				<MainContainer current_page={this.state.current_page}/>
			</Container>
		);
	}
}

// AppContainer.propTypes = {

// };

export default AppContainer;