import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Bootstrap Objs */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Cusom Objs */
import TopNav from './TopNav';
import MainContainer from './MainContainer';
import Header from './Header';
import Footer from './Footer';

/* Assets */
import squeexsturdy from '../img/squeexsturdy.gif';
import america from '../sounds/us_anthem.mp3';
import smb from '../sounds/smbros.mp3';



class AppContainer extends Component {
	constructor(props) {
		super(props);


		this.state = {
			current_page: 'Main',
			play: false
		};

	}

	audio = new Audio(smb);

	changePage(page) {
		this.setState({
			current_page: page
		});
	}

	componentDidMount() {
		this.audio.addEventListener('ended', () => this.setState({ play: false }));
	}
	  
	componentWillUnmount() {
		this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
	}

	musicOff = () => {
		if(this.state.play) {
			this.setState({
				play: false
			});
			this.audio.pause();
		}
	}

	musicOn = () => {
		if(!this.state.play) {
			this.setState({
				play: true
			});
			this.audio.play();
		}
	}

	changeAudio = (sound) => {
		this.setState({
			play: false
		});
		this.audio.pause();
		this.audio = new Audio(sound);
	}

	togglePlay = () => {
		this.setState({ play: !this.state.play }, () => {
		  this.state.play ? this.audio.play() : this.audio.pause();
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
		this.changeAudio(america);
	};

	handleFAQs = () => {
		this.setState({ current_page: 'FAQs' });
	};

	handleDraw = () => {
		this.setState({ current_page: 'Draw' });
		this.changeAudio(smb);
	};

	render() {
		return(
			<Container>
				<Header />
				<TopNav handleKKona={this.handleKKona}
						handleMain={this.handleMain}
						handleFAQs={this.handleFAQs}
						handleDraw={this.handleDraw}
						handleNames={this.handleNames} 
						audioToggle={this.togglePlay} 
						audioOn={this.state.play} />
				<MainContainer 
						current_page={this.state.current_page} 
						musicOn={this.musicOn}
						musicOff={this.musicOff} />
				<Footer />
			</Container>
		);
	}
}

// AppContainer.propTypes = {

// };

export default AppContainer;