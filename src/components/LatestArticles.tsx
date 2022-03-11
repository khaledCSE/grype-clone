import { Col, Container, Row } from 'react-bootstrap';
import './LatestArticles.scss';
import pinkImg from '../assets/pink.png';
import cardImage from '../assets/card-image-1.jpg';
import cardImage2 from '../assets/card-image-2.jpeg';
import cardImage3 from '../assets/card-image-3.jpeg';

const LatestArticles = () => {
    return (
        <Container className="latest-articles">
            <div
                className="article-header"
                style={{ backgroundImage: `url(${pinkImg})` }}
            >
                Latest Articles
            </div>

            <Row>
                <Col md={4} sm={12} className="me-auto">
                    <div className="card bg-primary text-light">
                        <img src={cardImage} alt="" />
                        <p>
                            5 Features For Your Professional Association's
                            Website
                        </p>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className="card bg-dark text-light">
                        <img src={cardImage2} alt="" />
                        <p>5 Proven Ways to Increase Member Retention</p>
                    </div>
                </Col>
                <Col md={4} sm={12} className="ms-auto">
                    <div className="card bg-primary text-light">
                        <img src={cardImage3} alt="" />
                        <p>
                            Membership Communication Plan: Your Guide to
                            Connecting with Your Members
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LatestArticles;
