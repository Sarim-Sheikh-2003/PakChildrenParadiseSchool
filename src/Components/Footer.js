import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import "../Styles/Footer.css";

export default function Footer() {
    const email = "pakchildrenparadiseschool@gmail.com";

    return (
        <div className="footer">
            <div className="copyright">
                <p>Copyright &copy;2024; Pak Children Paradise School</p>
            </div>
            <div className="footerlinks">
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                    <MdEmail className="footericon" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61561590306327&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="footericon" />
                </a>
            </div>
        </div>
    );
}