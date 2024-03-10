import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

function Economy() {
  return (
    <Container>
      <Row>
        <Col className='py-3'>

          <Alert variant="success">
            <Alert.Heading>Economy</Alert.Heading>
            <p>After independence, the state was managed as a democratic socialist welfare economy. From the 1990s, liberalisation of the mixed economy allowed Licence Raj restrictions against capitalism and foreign direct investment to be lightened, leading to economic expansion and an increase in employment. In the fiscal year 2018–19, the nominal gross state domestic product (GSDP) was ₹7.82 lakh crore (US$98 billion). GSDP growth; 11.4% in 2018–2019 and 10.5% in 2017–2018[289] had been high compared to an average of 2.3% annually in the 1980s and between 5.1%[290]:8 and 6.0% in the 1990s.: The state recorded 8.9% growth in enterprises from 1998 to 2005, higher than the national rate of 4.8%. The "Kerala phenomenon" or "Kerala model of development" of very high human development and in comparison low economic development has resulted from a strong service sector.In 2019–20, the tertiary sector contributed around 63% of the state's GSVA, compared to 28% by secondary sector, and 8% by primary sector. In the period between 1960 and 2020, Kerala's economy was gradually shifting from an agrarian economy into a service-based one</p>
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

          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Carnival_Info_Park_Phase_-_4.jpg/330px-Carnival_Info_Park_Phase_-_4.jpg" />
            <Card.Body>
              <Card.Title>Information technology</Card.Title>
              <Card.Text>
              Kerala has focused more attention towards growth of Information Technology sector with formation of Technopark, Thiruvananthapuram which is one of the largest IT employer in Kerala. It was the first technology park in India and with the inauguration of the Thejaswini complex on 22 February 2007, Technopark became the largest IT Park in India. Software giants like Infosys, Oracle, Tata Consultancy Services, Capgemini, HCL, UST Global, NeST and Suntec have offices in the state. The state has a second major IT hub, the Infopark centred in Kochi with "spokes"(it acts as the "hub") in Thrissur and Alleppy. As of 2014, Infopark generates one-third of total IT Revenues of the state with key offices of IT majors
              </Card.Text>
              {/* <Button variant="dark">Click Here</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col className='py-3' md={4}>

          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Nemmara-paddy.jpg/330px-Nemmara-paddy.jpg" />
            <Card.Body>
              <Card.Title>Agriculture</Card.Title>
              <Card.Text>
              The major change in agriculture in Kerala occurred in the 1970s when production of rice fell due to increased availability of rice all over India and decreased availability of labour. Consequently, investment in rice production decreased and a major portion of the land shifted to the cultivation of perennial tree crops and seasonal crops. Profitability of crops fell due to a shortage of farm labour, the high price of land, and the uneconomic size of operational holdings. Only 27.3% of the families in Kerala depend upon agriculture for their livelihood, which is also the least curresponding rate in India..
              </Card.Text>
              {/* <Button variant="dark">Click Here</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col className='py-3' md={4}>

          <Card>
            <Card.Img variant="top" src="https://indiawris.gov.in/wiki/lib/exe/fetch.php?media=350px-kl.png" />
            <Card.Body>
              <Card.Title>Fisheries</Card.Title>
              <Card.Text>
              With 590 kilometres (370 miles) of coastal belt, 400,000 hectares of inland water resources[366] and approximately 220,000 active fishermen, Kerala is one of the leading producers of fish in India. According to 2003–04 reports, about 11 lakh(1.1 million) people earn their livelihood from fishing and allied activities such as drying, processing, packaging, exporting and transporting fisheries. The annual yield of the sector was estimated as 6,08,000 tons in 2003–04. This contributes to about 3% of the total economy of the state. In 2006, around 22% of the total Indian marine fishery yield was from Kerala. During the southwest monsoon, a suspended mud bank develops along the shore, which in turn leads to calm ocean water, peaking the output of the fishing industry. This phenomenon is locally called chakara. The waters provide a large variety of fish: pelagic species; 59%, demersal species; 23%, crustaceans, molluscs and others for 18%. Around 1050,000(1.050 million) fishermen haul an annual catch of 668,000 tonnes as of a 1999–2000 estimate; 222 fishing villages are strung along the 590-kilometre (370-mile) coast. Another 113 fishing villages dot the hinterland.
              </Card.Text>
              {/* <Button variant="dark">Click Here</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Economy