import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" height={70} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link href="#deets">Services</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Video Resources
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Strategy Blog
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Video Podcast
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Webinars
                        </Nav.Link>
                        <Button>Book a 15-min call</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
