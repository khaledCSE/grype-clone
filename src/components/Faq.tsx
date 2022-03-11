import './ImageSection.scss';
import image5 from '../assets/image5.jpeg';
import ImageSection from './ImageSection';
import { faqList } from '../seeds/faq.seed';
import { Fragment } from 'react';

const Faq = () => {
    return (
        <ImageSection image={image5} imagePosition="left" imageRounded>
            <h3>Membership Site FAQs</h3>
            {faqList.map((item, i) => (
                <Fragment key={i}>
                    <p className="faq__question">{item.question}</p>
                    {item.answer.map((ans, index) => (
                        <Fragment key={index}>
                            <p
                                className="faq__answer"
                                style={{ margin: '1vh 0' }}
                            >
                                {ans}
                                {index === item.answer.length - 1 && (
                                    <a className="faq__link" href={item.link}>
                                        &nbsp; {item.link_text}
                                    </a>
                                )}
                            </p>
                        </Fragment>
                    ))}
                </Fragment>
            ))}
            <p className="faq__question">Have more questions?</p>
            <p className="faq__answer" style={{ margin: '1vh 0' }}>
                <a href="/" className="faq__link">
                    Book a time
                </a>{' '}
                with us or register for our upcoming member-engagement{' '}
                <a className="faq__link" href="/">
                    webinars and live podcast interviews
                </a>{' '}
                with experts in the world of association membership!
            </p>
        </ImageSection>
    );
};

export default Faq;
