import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Styles/ContactUs.css";

export default function ContactUs() {
    const email = "pakchildrenparadiseschool@gmail.com";
    const hours = [
        { days: "Monday - Thursday", time: "9am - 1pm" },
        { days: "Friday", time: "9am - 12pm" }
    ];
    const address = "B-352 BLOCK N NORTH NAZIMABAD KARACHI, 74600 , PAKISTAN";

    return (
        <div className="main">
            <div className="contactusheading">
                <h1>Contact Us</h1>
            </div>
            <div className="contactinfo">
                <h2>
                    Reach us through the following channels:
                </h2>
                <div className="links">
                    <ul>
                        <li>
                            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                                <MdEmail className="contactusicon" />&nbsp;{email}
                            </a>
                        </li>
                        <li>
                            <a href="tel:+922136641129">
                                <FaPhoneAlt className="contactusicon" />&nbsp;+92 (213) 664-1129
                            </a>
                        </li>
                        <li>
                            <a href="tel:+923349565493">
                                <FaPhoneAlt className="contactusicon" />&nbsp;+92 (334) 956-5493
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="officehours">
                <h2>
                    Our office hours are:
                </h2>
                <div className="hours">
                    {hours.map((hour, index) => (
                        <div className="timing" key={index}>
                            <p className="day">{hour.days}</p>
                            <p className="time">{hour.time}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="location">
                <h2>
                    Our Location:
                </h2>
                <p>
                    We are located at
                    &nbsp;
                    <a href="https://www.google.com/maps/place/PAK+CHILDREN+PARADISE+SCHOOL/@24.9430609,67.0625067,21z/data=!4m6!3m5!1s0x3eb3416d05a17959:0x88d15bc1f02320ab!8m2!3d24.9430301!4d67.0625878!16s%2Fg%2F11y5bg3cp8?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">{address}</a>
                    .
                </p>
            </div>
        </div>
    )
}