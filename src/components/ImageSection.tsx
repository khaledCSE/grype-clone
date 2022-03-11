import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ImageSection.scss';
// import memberLady from '../assets/member_engagement_nosedive900.jpg';

interface iProps {
    image: string;
    imageRounded?: boolean;
    imagePosition: 'left' | 'right';
}

const ImageSection: FC<iProps> = (props) => {
    return (
        <Container>
            {props.imagePosition === 'left' ? (
                <Row className="img-container">
                    <Col md={6} sm={12}>
                        <img
                            src={props.image}
                            alt=""
                            style={{
                                borderRadius: props.imageRounded
                                    ? '100px 200px 200px 300px'
                                    : '5px',
                            }}
                        />
                    </Col>
                    <Col md={6} sm={12}>
                        {props.children}
                    </Col>
                </Row>
            ) : (
                <Row className="img-container">
                    <Col md={6} sm={12}>
                        {props.children}
                    </Col>
                    <Col md={6} sm={12}>
                        <img
                            src={props.image}
                            alt=""
                            style={{
                                borderRadius: props.imageRounded
                                    ? '100px 200px 200px 300px'
                                    : '5px',
                            }}
                        />
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default ImageSection;
