import React from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
<link rel="stylesheet" href="./bootstrap.min (2).css"></link>

function Home() {
    return (
        <Container>
            <Row>
                <Col className='py-3'>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src=" https://wandertrust.in/wp-content/uploads/2021/04/maxresdefault.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src=" https://www.ekeralatourism.net/wp-content/uploads/2015/12/Varkala-Beach.png"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h2>High tides and good vibes</h2>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src=" https://www.mapsofindia.com/maps/kerala/images/kerala.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h2>Where time stands still.</h2>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src=" https://t4.ftcdn.net/jpg/01/28/57/63/360_F_128576315_ejpjSy7S7fsH275jCDuUtykU1O3B6rUb.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2>Sometimes, you just need to change your altitude.</h2>
                              
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src=" https://images.hindustantimes.com/img/2023/01/13/1600x900/abhishek-prasad-N3VzleBhOvk-unsplash_1628499374705_1673610928636_1673610928636.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2>A moment of bliss by the shimmering lake</h2>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row>
                <Col className='py-3' md={3} >
                    <Card>
                        <Card.Img variant="top" src="https://www.keralatourism.org/images/yatri-nivas.jpg" />
                        <Card.Body>
                            <Card.Title>YATHRI NIVAS</Card.Title>
                            <Card.Text>
                               
                               <p>
                                Devikulam
                                Munnar
                                <br/>
                                Idukki
                                <br/>
                                info@keralatourism.org
                                <br/>
                                04865264200, 04865264300
                                <br/>
                                Pin: 685613
                               </p>
                            </Card.Text>
                            <Button variant="dark">Click Here</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={3} >
                    <Card>
                        <Card.Img variant="top" src="https://www.keralatourism.org/images/campaign-video/E-brochure1.jpg" />
                        <Card.Body>
                            <Card.Title>Virtual Travel Assistant</Card.Title>
                            <Card.Text>
                            The WhatsApp Chatbot - Maya - will answer all the queries of travellers 24x7x365 about the destination, attractions, accommodation facilities, tourism products, etc.
                            </Card.Text>
                            <Button variant="dark">Click Here</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={3} >
                    <Card>
                        <Card.Img variant="top" src="https://www.keralatourism.org/images/campaign-video/App.jpg" />
                        <Card.Body>
                            <Card.Title>Best Kerala Travel App</Card.Title>
                            <Card.Text>
                            Embark on an enriching exploration of Kerala's beauty through our innovative mobile app, connecting you to captivating Heli tourism experiences. 
                            </Card.Text>
                            <Button variant="dark">Click Here</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={3} >
                    <Card>
                        <Card.Img variant="top" src="https://www.keralatourism.org/images/campaign-video/Youtbe-p.jpg" />
                        <Card.Body>
                            <Card.Title>Campaign-video</Card.Title>
                            <Card.Text>
                            https://youtu.be/fJDlIbV3zKY
                            <br/>
                            https://youtu.be/TPU7kfqUAAE
                            <br/>
                            https://youtu.be/GWjKEVxYazo
                            <br/>
                            https://youtu.be/OKqYUPVb6H8
                            </Card.Text>
                            <Button variant="dark">Click Here</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>



        </Container>
    )
}

export default Home