import './Hero.scss';
import heroVideo from '../assets/hero_video.mp4';
import heroVideoPoster from '../assets/hero-video-poster.jpg';
import { Button, Container } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="hero">
            <video poster={heroVideoPoster} autoPlay loop muted>
                <source src={heroVideo} type="video/mp4" />
                Video not supported
            </video>
            <div className="overlay">
                <Container>
                    <div className="hero-content">
                        <h1>Grow Your Professional</h1>
                        <h1>Association Membership</h1>
                        <Button size="lg">
                            Attend a Webinar to Learn More!
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
