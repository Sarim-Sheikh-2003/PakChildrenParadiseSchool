import { useNavigate, Outlet } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { RxHamburgerMenu } from "react-icons/rx";
import "../Styles/Header.css";

export default function Header() {
    const navigate = useNavigate();

    const OpenPage = (arg) => {
        navigate(arg);
    };

    return (
        <>
            <div className="header">
                <div className="name" onClick={() => OpenPage('/')}>
                    <img src="/Logo.png" alt="School Logo" />
                    <p>Pak Children Paradise School</p>
                </div>
                <div className="dropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <RxHamburgerMenu className="headericon" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => OpenPage('/AboutUs')}>About Us</Dropdown.Item>
                            <Dropdown.Item onClick={() => OpenPage('/Leadership')}>Leadership</Dropdown.Item>
                            <Dropdown.Item onClick={() => OpenPage('/Calendar')}>Calendar</Dropdown.Item>
                            <Dropdown.Item onClick={() => OpenPage('/ContactUs')}>Contact Us</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="navbar">
                    <button className="navbutton" type="button" onClick={() => OpenPage('/AboutUs')}>About Us</button>
                    <button className="navbutton" type="button" onClick={() => OpenPage('/Leadership')}>Leadership</button>
                    <button className="navbutton" type="button" onClick={() => OpenPage('/Calendar')}>Calendar</button>
                    <button className="navbutton" type="button" onClick={() => OpenPage('/ContactUs')}>Contact Us</button>
                </div>
            </div>
            <Outlet />
        </>
    )
}