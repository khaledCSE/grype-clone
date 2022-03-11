import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
    return (
        <footer id="site_footer">
            <h3 className="text-center">Related Articles</h3>
            <Container>
                <Row style={{ margin: '4rem 0' }}>
                    <Col md={4} sm={12}>
                        <a href="/">
                            Blog: 5 Tips to Increase Member Retention with an
                            Engaging Onboarding Experience
                        </a>
                    </Col>
                    <Col md={4} sm={12}>
                        <a href="/">
                            Blog: How to Increase Your Member Engagement with
                            Less than One Hour of Marketing Per Week
                        </a>
                    </Col>
                    <Col md={4} sm={12}>
                        <a href="/">
                            Blog: Increase your Member Retention with a
                            Personalized Membership Portal using CiviCRM and
                            Drupal 8
                        </a>
                    </Col>
                </Row>
                <Row style={{ margin: '2rem 0' }}>
                    <Col md={4} sm={12}>
                        <a href="/">
                            Blog: Top 7 Rules to Create a Great User Experience
                            on Your Website
                        </a>
                    </Col>
                    <Col md={4} sm={12}>
                        <a href="/">
                            Full Webinar: Secrets to Growing your Association
                            Without Breaking the Bank
                        </a>
                    </Col>
                    <Col md={4} sm={12}>
                        <a href="/">
                            Podcast: How to create value for association
                            members, with Michael Lachapelle, Founder at
                            Business Model Fulcrum
                        </a>
                    </Col>
                </Row>
                <Row className="p-5 footer_bottom">
                    <Col md={4} sm={12} className="footer_links">
                        <a href="/">About Us</a>
                        <a href="/">Contact Us</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Sitemap</a>
                    </Col>
                    <Col
                        md={4}
                        sm={12}
                        className="d-flex justify-content-evenly px-5"
                    >
                        <a href="/">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </Col>
                    <Col md={4} sm={12} className="text-center">
                        <span>
                            Email:{' '}
                            <a href="mailto:support@grype.ca">
                                support@grype.ca
                            </a>
                        </span>
                        <br />
                        <span>
                            Phone:{' '}
                            <a href="tel:(613) 518-6070">(613) 518-6070</a>
                        </span>
                        <br />
                        <span>Grype Digital Inc. © 2021</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
