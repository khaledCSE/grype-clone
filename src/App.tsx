import { Fragment } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import Slogan from './components/Slogan';
import './App.scss';
import './components/ImageSection.scss';
import { Button, Container } from 'react-bootstrap';

import memberLady from './assets/member_engagement_nosedive900.jpg';
import asianLady from './assets/smiling asian woman at computer.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpeg';
import testimonialVideo from './assets/hero_video.mp4';
import grypePoster from './assets/grype.png';
import Faq from './components/Faq';
import Footer from './components/Footer';
import LatestArticles from './components/LatestArticles';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <Slogan />
            <ImageSection image={memberLady} imagePosition="left" imageRounded>
                <h3>The Member Engagement Nosedive</h3>
                <p className="img-subtitle">
                    Your association offers valuable benefits, and yet members
                    aren't sticking around.
                </p>
                <ul className="img-points">
                    <li>
                        Your members are not engaged and are at risk of leaving.
                    </li>
                    <li>Members do not renew their membership.</li>
                    <li>
                        Members do not have an easy way to connect with member
                        benefits.
                    </li>
                </ul>
            </ImageSection>

            <ImageSection image={asianLady} imagePosition="right" imageRounded>
                <h3>Ready to Help your Membership Soar?</h3>
                <p className="img-subtitle">
                    Members need a place to be a member. Members need a member
                    hub to:
                </p>
                <ul className="img-points">
                    <li>Find solutions to their professional problems.</li>
                    <li>
                        Browse member benefits that will help reach their goals.
                    </li>
                    <li>Receive on-demand, automated onboarding support.</li>
                    <li>Engage when they want to connect.</li>
                </ul>
            </ImageSection>
            <Container>
                <div className="center-link">
                    <a href="/">
                        Learn About our Membership Management Software with
                        Proven ROI!
                    </a>
                </div>
            </Container>
            <div className="testimonial bg-dark">
                <Container>
                    <h2
                        className="text-center"
                        style={{ marginBottom: '30px' }}
                    >
                        Helping Our Clients Grow Their Membership!
                    </h2>
                    <p>
                        We help associations and member-based nonprofits
                        pinpoint
                    </p>
                    <p>their problem areas to gain improvements with:</p>
                    <p>Membership Growth</p>
                    <p>Revenue Growth </p>
                    <p>Member Communication</p>
                    <p>Automations so Staff Time is Better Utilized!</p>
                </Container>
                <Container>
                    <div className="video-section">
                        <video
                            width="100%"
                            height="100%"
                            //src={testimonialVideo}
                            poster={grypePoster}
                            controls
                        >
                            <source
                                src={testimonialVideo}
                                type="video/mp4"
                            ></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Container>
            </div>
            <div className="simple-title">
                <Container>
                    <h3>Get an Expert Opinion on Your Membership Site</h3>
                    <p>
                        Our membership experts will help you understand your
                        website's member engagement data to make informed
                        decisions so you always see a return on investment on
                        changes to your membership site.
                    </p>
                </Container>
            </div>

            <ImageSection image={image3} imagePosition="left">
                <h3>The No-Stress Benefits Delivery Tool: Member Lounge</h3>
                <p className="img-subtitle">
                    Get a Gorgeous Membership Site Today!
                </p>
                <ul className="img-points">
                    <li>Gated members-only access to content.</li>
                    <li>Easy access to member benefits.</li>
                    <li>Automate member communication.</li>
                    <li>Offer automated on-demand onboarding support.</li>
                </ul>
                <Button size="lg" style={{ margin: '30px 0' }}>
                    Learn More!
                </Button>
            </ImageSection>

            <ImageSection image={image4} imagePosition="left" imageRounded>
                <h3>Custom-Built Membership Sites</h3>
                <p className="img-subtitle">
                    For associations and member-based nonprofits with
                    sophisticated member benefits and lots of content, a
                    custom-built membership site may be your best option. This
                    will allow you to:
                </p>
                <ul className="img-points">
                    <li>Control the user experience of your members.</li>
                    <li>
                        Highlight content that is most appropriate for each
                        member.
                    </li>
                    <li>Fully control your membership site.</li>
                </ul>
                <Button size="lg" style={{ margin: '30px 0' }}>
                    Learn More!
                </Button>
            </ImageSection>

            <div style={{ background: '#F5F8F9' }}>
                <Faq />
                <LatestArticles />
            </div>
            <Footer />
        </Fragment>
    );
};

export default App;
