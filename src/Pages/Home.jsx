import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import functions from "../Components/functions.js"
import "../Styles/Home.css";
import Home1 from "../Images/Home1.jpg"
import Home2 from "../Images/Home2.jpg"
import Home3 from "../Images/Home3.jpg"

export default function Home() {
    const navigate = useNavigate();

    const OpenPage = (arg) => {
        navigate(arg);
    };

    return (
        <div className="main">
            <div className="maincarousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            src={Home1}
                            className="carousel-image"
                            alt="About Us"
                        />
                        <Carousel.Caption>
                            <div className="carouselcaption">
                                <h1>About Us</h1>
                                <p>
                                    Welcome to Pak Children Paradise School, a beacon of educational excellence since 1980 in Karachi.
                                    Join us in shaping the leaders of tomorrow, where tradition meets innovation in education.
                                </p>
                                <button className="carouselnavbutton" type="button" onClick={() => OpenPage('/AboutUs')}>Read More</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Home2}
                            className="carousel-image"
                            alt="About Us"
                        />
                        <Carousel.Caption>
                            <div className="carouselcaption">
                                <h1>Leadership</h1>
                                <p>
                                    Meet Our faculty.
                                </p>
                                <button className="carouselnavbutton" type="button" onClick={() => OpenPage('/Leadership')}>Read More</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Home3}
                            className="carousel-image"
                            alt="About Us"
                        />
                        <Carousel.Caption>
                            <div className="carouselcaption">
                                <h1>Events</h1>
                                <p>
                                    See our upcoming Events!
                                </p>
                                <button className="carouselnavbutton" type="button" onClick={() => OpenPage('/Calendar')}>Read More</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="cards">
                <Row>
                    {functions.map((func) => (
                        <Col md={12} key={func.id}>
                            <Card>
                                <Carousel>
                                    {func.image.map((imgUrl, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                src={imgUrl}
                                                className="card-carousel-image"
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title>{func.title}</Card.Title>
                                    <Card.Text>{func.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}