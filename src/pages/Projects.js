import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import responsiveWeb from '../images/responsiveWeb.png';
import eCommerceAPI from '../images/eCommerceAPI.png';
import eCommerceReact from '../images/eCommerceReact.png';
import TicTacToe from '../images/TicTacToe.png';

export default function Projects(){
	return (
		<Container fluid className="page-coconut-bg flex-column align-items-center">

			<section className="">
				<div className="projects-header-wrapper mt-5 rounded-pill border border-2 border-dark justify-content-center">
					<h1 className=" text-center p-1">
						Projects
					</h1>	
				</div>
				
			</section>

			<section className="justify-content-center container-fluid p-4">
					<Row>
						<Col md={6} className="p-3 d-flex justify-content-center">
							<Card className="card-width h-100 p-1">
							  <Card.Img variant="top" src={responsiveWeb} />
							  <Card.Body className="d-flex flex-column">
							    <Card.Title className="text-center">Static Responsive Website</Card.Title>
							    <Card.Text>
							      This is the first website project I made with Bootstrap, CSS, and HTML.
							    </Card.Text>
							    <Button variant="primary" className=" mt-auto">Take a look!</Button>
							  </Card.Body>
							</Card>
						</Col>

						<Col md={6} className="p-3 d-flex justify-content-center">
							<Card className="card-width h-100 p-1">
							  <Card.Img variant="top" src={eCommerceAPI} />
							  <Card.Body className="d-flex flex-column">
							    <Card.Title className="text-center">eCommerce API</Card.Title>
							    <Card.Text>
							      This API was made using Node, Express, and Mongoose. The database used was MongoDB Atlas so this is a NoSql DB. 
							    </Card.Text>
							    <Button variant="primary" className=" mt-auto">Read the code</Button>
							  </Card.Body>
							</Card>
						</Col>

						<Col md={6} className="p-3 d-flex justify-content-center">
							<Card className="card-width h-100 p-1">
							  <Card.Img variant="top" src={eCommerceReact} />
							  <Card.Body className="d-flex flex-column">
							    <Card.Title className="text-center">eCommerce Simulation Website</Card.Title>
							    <Card.Text>
							      This is the first project that I made with React. It has CRUD operations with the admin account and CR operations for a normal user.

							      It simulates a simple eCommerce website.
							    </Card.Text>
							    <Button variant="primary" className=" mt-auto">Add to Cart!</Button>
							  </Card.Body>
							</Card>
						</Col>

						<Col md={6} className="p-3 d-flex justify-content-center">
							<Card className="card-width h-100 p-1">
							  <Card.Img variant="top" src={TicTacToe} />
							  <Card.Body className="d-flex flex-column">
							    <Card.Title className="text-center">Tic Tac Toe</Card.Title>
							    <Card.Text>
							      This is a tic tac toe game made with React.
							    </Card.Text>
							    <Button variant="primary" className=" mt-auto">Play!</Button>
							  </Card.Body>
							</Card>
						</Col>
					</Row>
			</section>
			
		</Container>
		
	)
}
