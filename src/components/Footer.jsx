import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import handle from '../img/squeex_handle.png';
import flexR from '../img/flex_r.png';
import flexL from '../img/flex_l.png';
import goomba from '../img/squeexGoomba.png';

const Footer = () => {
	return(
		<div className="footer">
			<Row className="goombas">
				<Col><img height="45px" width="45px" src={goomba} alt="squeexGoomba" /></Col>
				<Col><img height="45px" width="45px" src={goomba} alt="squeexGoomba" /></Col>
				<Col><img height="45px" width="45px" src={goomba} alt="squeexGoomba" /></Col>
				<Col><img height="45px" width="45px" src={goomba} alt="squeexGoomba" /></Col>
				<Col><img height="45px" width="45px" src={goomba} alt="squeexGoomba" /></Col>

			</Row>
			<Row className="testimonial">
				<Col><p><img src={handle} alt="Squeex: " /> I love this site!</p></Col>
			</Row>
			<Row className="signature">
				<Col><span><img height="20" width="20" src={flexL} alt="flex" /></span>Made by a Linux Bro<span><img height="20" width="20" src={flexR} alt="flex" /></span></Col>
			</Row>
		</div>
	);
}

export default Footer;