import React from "react";
import { FaGraduationCap, FaHandHoldingHeart } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";
import "../Styles/AboutUs.css";

export default function AboutUs() {
    return (
        <div className="main">
            <div className="aboutusheading">
                <h1>About Us</h1>
            </div>
            <div className="intro">
                <h2>Introduction</h2>
                <p>
                    Welcome to Pak Children Paradise School, a beacon of educational excellence since 1980 in Karachi.
                    Our institution is dedicated to fostering a nurturing environment where young minds are inspired to achieve their full potential.
                    With a rich history of academic success and a commitment to holistic development, we offer a vibrant learning atmosphere where curiosity is encouraged, and every child is valued.
                </p>
            </div>
            <div className="ourmission">
                <h2>Our Mission</h2>
                <div className="mission">
                    <FaGraduationCap className="aboutusicon" />
                    <div className="missioncontent">
                        <h3>
                            Empowering Students for the 21st Century
                        </h3>
                        <ul>
                            <li>
                                By equipping students to excel as well-rounded individuals who are prepared to meet global challenges head-on.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mission">
                    <FaHandHoldingHeart className="aboutusicon" />
                    <div className="missioncontent">
                        <h3>
                            Nurturing Holistic Development
                        </h3>
                        <ul>
                            <li>
                                By fostering the mental, intellectual, academic, physical, and cultural growth of each student.

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mission">
                    <RiLightbulbFlashFill className="aboutusicon" />
                    <div className="missioncontent">
                        <h3>
                            Ensuring Intellectual Growth
                        </h3>
                        <ul>
                            <li>
                                By guiding students to acquire core proficiency skills, develop problem-solving abilities, engage in critical thinking, enhance analytical skills, conduct research, and apply knowledge practically.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="objectives">
                <div className="lists">
                    <h3>Objectives for Nursery Section</h3>
                    <ul>
                        <li>
                            To promote a smooth transition from home to school.
                        </li>
                        <li>
                            To prepare the child for primary education.
                        </li>
                        <li>
                            To encourage socialization as children interact, play, and learn together.
                        </li>
                        <li>
                            To ingrain in children the spirit of inquiry and creativity through exploration of nature and the immediate environment.
                        </li>
                        <li>
                            Teaching good habits, especially good health and social habits.
                        </li>
                        <li>
                            Imparting the rudiments of numbers and letters through sounds, colors, shapes, and forms, using the play way method of teaching/learning.
                        </li>
                    </ul>
                </div>
                <div className="lists">
                    <h3>Objectives for Pre-Primary and Primary Section</h3>
                    <ul>
                        <li>
                            To lay a solid foundation to help the child excel at higher educational levels.
                        </li>
                        <li>
                            To ingrain in the child permanent literacy and numeracy and the ability to communicate effectively.
                        </li>
                        <li>
                            To instill the right values and attitudes in the child for thriving in a dynamic society.
                        </li>
                        <li>
                            To focus on training the child's mind for a better understanding of the world around them.
                        </li>
                        <li>
                            To create opportunities that help the child develop basic manipulative skills to function effectively in society.
                        </li>
                        <li>
                            Aiming at developing a well-rounded child who is sound academically, morally, socially, physically, and emotionally.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}