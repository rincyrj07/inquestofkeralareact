import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

function Culture() {
    return (
        <Container>
            <Row>
                <Col className='py-3'>

                    <Alert variant="success">
                        <Alert.Heading>Culture</Alert.Heading>
                        <p>
                            The culture of  Kerala is composite and cosmopolitan in nature and it is an integral part of Indian culture.It is a synthesis of Aryan, Dravidian, Arab, and European cultures, developed over millennia, under influences from other parts of India and abroad. It is defined by its antiquity and the organic continuity sustained by the Malayali people. It was elaborated through centuries of contact with neighbouring and overseas cultures. However, the geographical insularity of Kerala from the rest of the country has resulted in the development of a distinctive lifestyle, art, architecture, language, literature and social institutions. Over 10,000 festivals are celebrated in the state every year. The Malayalam calendar, a solar sidereal calendar started from 825 CE in Kerala, finds common usage in planning agricultural and religious activities. Malayalam, one of the classical languages in India, is Kerala's official language. Over a dozen other scheduled and unscheduled languages are also spoken. Kerala has the greatest consumption of alcohol in India</p>



                        {/* <hr /> */}
                        {/* <p className="mb-0">
Whenever you need to, be sure to use margin utilities to keep things
nice and tidy.
</p> */}
                    </Alert>
                </Col>
            </Row>
            <Row>
                <Col className='py-3' md={4}>

                    <Card >
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Shree_Krishnan_by_FACT_Jayadeva_Varma.jpg/469px-Shree_Krishnan_by_FACT_Jayadeva_Varma.jpg" />
                        <Card.Body >
                            <Card.Title>A Kathakali: Art form of Kerala</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={4}>

                    <Card>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Muchilottu_Bhagavathi_Theyyam.jpg/330px-Muchilottu_Bhagavathi_Theyyam.jpg" />
                        <Card.Body>
                            <Card.Title>Theyyam, The ritual art of North Malabar</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={4}>

                    <Card>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/5_image_collage_of_floral_arrangement_during_the_Hindu_festival_of_Onam_Kerala.jpg/330px-5_image_collage_of_floral_arrangement_during_the_Hindu_festival_of_Onam_Kerala.jpg" />
                        <Card.Body>
                            <Card.Title>Onam, Kerala's biggest celebration, Keralites create pookkalam (floral carpet) designs in front of their houses.</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='py-3' md={4}>

                    <Card >
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ThrissurPooram-Kuda.jpg/330px-ThrissurPooram-Kuda.jpg" />
                        <Card.Body >
                            <Card.Title>Thrissur Pooram festival</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={4}>

                    <Card >
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mohiniyattam_at_Kerala_School_Kalolsavam_2019_02.jpg/330px-Mohiniyattam_at_Kerala_School_Kalolsavam_2019_02.jpg" />
                        <Card.Body >
                            <Card.Title>A mohiniattam performance</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={4}>

                    <Card >
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sadhya_DSW.jpg/330px-Sadhya_DSW.jpg" />
                        <Card.Body >
                            <Card.Title>Onam Sadya</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='py-3' md={4}>

                    <Card >
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/India_film_clapperboard_%28variant%29.svg/330px-India_film_clapperboard_%28variant%29.svg.png" />
                        <Card.Body >
                            <Card.Title>Malayalam cinema is the segment of Indian cinema dedicated to the production of motion pictures in the Malayalam language widely spoken in the state of Kerala, India.</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={4}>

                    <Card >
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Quilon_Syrian_copper_plates_%28849_AD%29.jpg/330px-Quilon_Syrian_copper_plates_%28849_AD%29.jpg" />
                        <Card.Body >
                            <Card.Title>Malayalam is a Dravidian language spoken in the Indian state of Kerala and the union territories of Lakshadweep and Puducherry (Mahé district) by the Malayali people</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={4}>

                    <Card >
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ennappathy_ayurveda_%E0%B4%8E%E0%B4%A3%E0%B5%8D%E0%B4%A3%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BE%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%BF.jpg/330px-Ennappathy_ayurveda_%E0%B4%8E%E0%B4%A3%E0%B5%8D%E0%B4%A3%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BE%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%BF.jpg" />
                        <Card.Body >
                            <Card.Title>Ayurveda is an alternative medicine system with historical roots in the Indian subcontinent</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Culture