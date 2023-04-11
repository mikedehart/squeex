import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Accordion from 'react-bootstrap/Accordion';

import miniontime from '../../img/minions1.gif';
import oldsqueex from '../../img/old_squeex.jpg';
import pants from '../../img/pants3.png';
import angry from '../../img/squeex4.PNG';



const FAQs = () => {
	return(
		<Container className="faqs_cnt">
			<h2><span><img src={miniontime} alt="Minion Time!" width="10%" height="10%" /></span> Frequently Asked Questions <span><img src={miniontime} alt="Minion Time!" width="10%" height="10%" /></span></h2>
			<Accordion className="acc_cnt">
				<Accordion.Item eventKey="0">
					<Accordion.Header className="acc_header">
						Who the fuck is squeex?
					</Accordion.Header>
					<Accordion.Body className="acc_body">
						<Row>
							<Col>
								<Figure>
									<Figure.Image 
										height={293}
										width={269}
										alt="Squeex"
										src={oldsqueex}
									/>
									<Figure.Caption className="img_caption">
										Jan. 2023 - Squeex playing Among Us
									</Figure.Caption>
								</Figure>
							</Col>
							<Col>
								<p>Squeex is a 49 year old Twitch/YouTube personality. He is primarily known
								for his Super Mario 64 let's plays, and being decent in CS:GO like 20 years ago.</p>

								<p>Born in Dubai, Squeex now resides in an undisclosed compound on the east coast of the United States.</p>
							</Col>
						</Row>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header className="acc_header">
						Hog Size?
					</Accordion.Header>
					<Accordion.Body className="acc_body">
						<Row>
							<Col>
								<Figure>
									<Figure.Image 
										height={293}
										width={269}
										alt="Squeex"
										src={pants}
									/>
									<Figure.Caption className="img_caption">
										Hidden Gem 2023
									</Figure.Caption>
								</Figure>
							</Col>
							<Col>
								<p>Hog has never been revealed despite numerous promises from Squeex.</p>
								<p>Thanks to efforts from discord scientists and chat moms, we suspect it to be extremely large, 
								between 9-11 inches and a 2.6 inch diameter.</p>
							</Col>
						</Row>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header className="acc_header">
						Why doesn't he read my messages?
					</Accordion.Header>
					<Accordion.Body className="acc_body">
						<Row>
							<Col>
								<Figure>
									<Figure.Image 
										height={293}
										width={269}
										alt="Pants"
										src={angry}
									/>
									<Figure.Caption className="img_caption">
										Squeex accidentally reading a message from a 1-year subscriber
									</Figure.Caption>
								</Figure>
							</Col>
							<Col>
								<p>Despite his chipmunk-like appearance, Squeex is extremely toxic to his chat and especially despises older chatters. 
								The longer you remain a subscriber the lower the chance he will actually read any of your chat messages.</p>

								<p>To ensure the best chance of getting your chat message read make sure to <b>never subscribe</b> to his channel and
								equip the <b>Twitch Verified user</b> badge as it has been confirmed these are the only chat messages he reads.</p>
							</Col>
						</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
}

export default FAQs;