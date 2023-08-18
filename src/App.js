// import logo from './logo.svg';
import './App.css';
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from '../src/image/m1.png'
import { Button, Card, CardGroup, Col, Container, Form, Image, ListGroup, ListGroupItem, Nav, NavDropdown, Navbar, ProgressBar, Row, Table } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { SiIndeed } from 'react-icons/si'

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar expand="lg" style={{ padding: "0", height:"10vh" }} className="fixed-top z-10000" >
        <Container style={{ padding: "0" }} >
          <Navbar.Brand href="#" className='text-gray' style={{ fontWeight: "bold" }}>Mrunali Zalavadiya</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav>
              <Nav.Link href="#About" className='text-black' style={{ fontWeight: "bold" }} >About</Nav.Link>
              <Nav.Link href="#Skill" className='text-black' style={{ fontWeight: "bold" }}>Skills</Nav.Link>
              <Nav.Link href="#Experience" className='text-black' style={{ fontWeight: "bold" }}>Experience</Nav.Link>
              <Nav.Link href="#Education" className='text-black' style={{ fontWeight: "bold" }}>Education</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navbar */}

      {/* First */}
      <Container fluid className='sec-10' style={{ padding: "10vh", height:"100vh" }}>
        <Card style={{ width: '100%',height:"100%", border: "none", display:"flex", alignItems:"center" }} className="text-center card" >
          <Card.Body>
            <h1 className='text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white' style={{ fontWeight: "bold" }}>Hi. I’m Mrunali</h1>
            <br />
            <Card.Subtitle className="mb-4 text-white" style={{textDecoration:"underline", fontWeight:"bold", fontSize:"18px"}} >Front-End Developer</Card.Subtitle>
            <div class="overflow-x-auto">
              <Table class="min-w-full divide-y divide-gray-200" >
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider, text-white" style={{ fontWeight: "bold",backgroundColor: "#000000" }}>Full Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider, text-white" style={{ fontWeight: "bold",backgroundColor: "#000000" }}>Birth Date</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider, text-white" style={{ fontWeight: "bold",backgroundColor: "#000000" }}>Address</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider, text-white" style={{ fontWeight: "bold",backgroundColor: "#000000" }}>Email</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider, text-white" style={{ fontWeight: "bold",backgroundColor: "#000000" }}>Phone No</th>
                    {/* <!-- Add more headers as needed --> */}
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 text-muted ">
                  <td style={{fontWeight:"bold" ,padding:"10px"}}>MRUNALI ZALAVADIYA</td>
                  <td style={{fontWeight:"bold",padding:"10px"}}>10-10-1996</td>
                  <td style={{fontWeight:"bold",padding:"10px"}}>1079 Blueheron Blvd, Mississauga, ON L5V 2J7</td>
                  <td style={{fontWeight:"bold",padding:"10px"}}>patelmrunali0@gmail.com</td>
                  <td style={{fontWeight:"bold",padding:"10px"}}>+1 (437)-431-2278</td>
                </tbody>
              </Table>
            </div>
            <Card.Link href="#"><FaLinkedinIn className='leading-none text-white' /></Card.Link>
            <Card.Link href="#"><GrInstagram className='leading-none text-white' /></Card.Link>
            <Card.Link><SiIndeed className='leading-none text-white' /></Card.Link>
          </Card.Body>
        </Card>

      </Container>
      {/* First */}

      {/* ABOUT */}
      <Container id='About' style={{ padding: "10vh" }}>
            <h2 className='text-4xl text-center mb-5' style={{ fontWeight: "bold",textDecoration:"underline" }}>About Me</h2>
        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Col style={{ padding: "0", display: "flex", justifyContent: "center", alignContent: "center" }}>
            <img src={im1} className="text-center" alt="..." style={{ height: "80vh", width: "50vh", boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px" }} />
          </Col>
          <Col style={{ padding: "0" }}>
            <p className='text-gray-200'>Innovative, task driven professional with 3 Year and 4 month of experience developing websites for clients. Proficient in creating User interfaces, writing, and testing codes & implementing new features as per the requirements and feedback. Proficient in HTML, CSS, and JavaScript, with a strong foundation in React and a keen eye for design. Dedicated to delivering high-quality code and optimizing website performance.</p>
            <Button className='text-white bg-slate-300' style={{ backgroundColor: "#36454F", border: 'none', boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px" }}>Download CV</Button>
          </Col>
        </Row>
      </Container>
      {/* ABOUT */}

      {/* skill */}
      <Container id='Skill' style={{ padding: "10vh" }}>
        <Row style={{ padding: "0" }}>
          <h2 className='text-center mb-5' style={{ fontWeight: "bold",textDecoration:"underline" }}>Skills</h2>
          <Col>
            <span style={{ fontWeight: "bold" }}>ReactJS</span>
            <Col><ProgressBar now={90} /></Col>
            <Col>90%</Col>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>NextJS</span>
            <Col><ProgressBar now={90} /></Col>
            <Col>90%</Col>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>Redux</span>
            <Col><ProgressBar now={90} /></Col>
            <Col>90%</Col>
          </Col>
        </Row>
        <Row style={{ padding: "0" }}>
          <Col>
            <span style={{ fontWeight: "bold" }}>SSR</span>
            <Col><ProgressBar now={80} /></Col>
            <Col>80%</Col>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>JavaScript</span>
            <Col><ProgressBar now={80} /></Col>
            <Col>80%</Col>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>HTML</span>
            <Col><ProgressBar now={80} /></Col>
            <Col>80%</Col>
          </Col>
        </Row>
        <Row style={{ padding: "0" }}>
          <Col>
            <span style={{ fontWeight: "bold" }}>Bootstrap</span>
            <Col><ProgressBar now={70} /></Col>
            <Col>70%</Col>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>CSS</span>
            <Col><ProgressBar now={70} /></Col>
            <Col>70%</Col>
          </Col>
          <Col>
            <span style={{ fontWeight: "bold" }}>TailwindCSS</span>
            <Col><ProgressBar now={70} /></Col>
            <Col>70%</Col>
          </Col>
        </Row>
      </Container >
      {/* skill */}

      {/* Experience */}
      <Container id='Experience' style={{ padding: "10vh" }}>
        <h2 className='text-center mb-5' style={{ fontWeight: "bold",textDecoration:"underline" }}>Experience</h2>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ fontWeight: "bold", fontSize:"22px" }} >Trade Unlisted</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}} >Developing client-focused modules with maintainable code and collaborating closely with backend developers for API integration, ensuring seamless user experiences. implemented a User authentication. Integrating Redux for effective state management, utilizing Thunk, and Redux Toolkit (RTK).</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}}>Crafting responsive layouts for diverse devices, ensuring consistent experiences, and collaborating with designers and developers using Git and GitHub.</ListGroup.Item>
          <ListGroup.Item  className='text-white'style={{backgroundColor: "#7d8281"}}>Initially project was developed in pure React and later refactored to leverage cross cutting features of Next.js like Server-side rendering, Role-Based Access Control (RBAC) for improved security and user management. For Better SEO.</ListGroup.Item>
        </ListGroup>

        <ListGroup variant="flush" >
          <ListGroup.Item style={{ fontWeight: "bold", fontSize:"22px" }} >The Natural Herbs</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}}>Created a dynamic and user-friendly website dedicated to Ayurvedic, Homeopathy, Personal Care and HealthCare Products. Integrating Redux Saga to effectively manage asynchronous actions and side effects within the Redux state management framework.</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}}>I meticulously addressed cross-browser compatibility to ensure a consistent and seamless experience for users across various web browsers.</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}}>Redux Toolkit as a comprehensive solution for efficient and structured state management. Iintegrated essential features like product management, Category management and cart management.</ListGroup.Item>
          <ListGroupItem className='text-white' style={{backgroundColor: "#7d8281"}}>Robust validation mechanisms to ensure the accuracy and integrity of user inputs.</ListGroupItem>
        </ListGroup>

        <ListGroup variant="flush" >
          <ListGroup.Item  style={{ fontWeight: "bold", fontSize:"22px" }} >WenddyGems</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}}>Designed and developed an ecommerce platform focused on engagement and marriage diamond rings, implemented a robust search and filtering.</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}}>Focused on enhancing user engagement and satisfaction by implementing three key features: detailed product pages, user accounts, and a Wishlist system.</ListGroup.Item>
          <ListGroup.Item className='text-white' style={{backgroundColor: "#7d8281"}}>Prioritized responsive design to ensure a seamless and visually pleasing experience across various devices and screen sizes.
          </ListGroup.Item>
          <ListGroupItem className='text-white' style={{backgroundColor: "#7d8281"}}>Robust validation mechanisms to ensure the accuracy and integrity of user inputs.
          </ListGroupItem>
        </ListGroup>
      </Container >
      {/* Experience */}

      {/* Education */}
      <Container id='Education' style={{ padding: "10vh" }}>
        <h2 className='text-4xl text-center mb-5' style={{ fontWeight: "bold", textDecoration:"underline" }}>Education</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Bachelor of Engineering in Computer Science  </Card.Title>
                <Card.Text>Mahavir Swami College of Engineering, Surat, Gujarat, India 	CPI: 8.03</Card.Text>
                <Card.Text><span style={{ fontWeight: "bold" }} >CPI:</span> 8.03</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body >
                <Card.Title style={{ fontWeight: "bold" }}>Diploma of Computer Engineering   </Card.Title>
                <Card.Text>Mahavir Swami College of Polytechnic, Surat, Gujarat, India</Card.Text>
                <Card.Text><span style={{ fontWeight: "bold" }} >CPI:</span> 7.50</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Education */}
    </>
  );
}

export default App;
