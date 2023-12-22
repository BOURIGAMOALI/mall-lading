import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppBar = () => {
    const [hovered, setHovered] = useState(false); // Declare 'hovered' state variable
    const navLinkStyle = {
        color: '#29235C', // Second color
        marginRight: '20px', // Increased margin for a spacious look
        transition: 'color 0.3s ease', // Transition for color change
        fontSize: '18px', // Increased font size for Navbar links
        fontFamily: 'Poppins, sans-serif', // Use a common sans-serif font
        fontWeight: '400', // Set font weight to normal
    };

    const navLinkActiveStyle = {
        ...navLinkStyle,
        color: '#A52727', // Third color for active link
        fontWeight: 'bold', // Make the active link bold
    };

    const handleHover = (e) => {
        e.target.style.color = '#A52727'; // Change color on hover
        setHovered(true);

    };

    const handleMouseOut = (e) => {
        e.target.style.color = '#29235C'; // Change color back on mouse out
        setHovered(false);

    };
    const appNameStyle = {
        color: hovered ? '#891A1D' : '#225777', // Third color for app name
        fontWeight: 'bold', // Make the app name bold
        fontSize: '24px', // Increase font size for the app name
        textDecoration: 'none', // Remove underline from the app name
        transition: 'color 0.3s ease', // Transition for color change on hover
        fontFamily: 'Arial, sans-serif', // Change font family to a common sans-serif font
    };

    const navBarStyle = {
        backgroundColor: '#C4D3DC', // Navbar background color
        borderBottom: '1px solid #6995b1', // Border at the bottom for separation
    };


    return (
        <Navbar style={navBarStyle} expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={appNameStyle} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                    Mall For All
                </Navbar.Brand>
                <Navbar.Brand href="#home">
                    {/* <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            style={navLinkStyle}
                            onMouseOver={handleHover}
                            onMouseOut={handleMouseOut}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#features"
                            style={navLinkActiveStyle}
                            onMouseOver={handleHover}
                            onMouseOut={handleMouseOut}
                        >
                            Features
                        </Nav.Link>
                        <Nav.Link
                            href="#testimonials"
                            style={navLinkStyle}
                            onMouseOver={handleHover}
                            onMouseOut={handleMouseOut}
                        >
                            Testimonials
                        </Nav.Link>
                        <Nav.Link
                            href="#promotions"
                            style={navLinkStyle}
                            onMouseOver={handleHover}
                            onMouseOut={handleMouseOut}
                        >
                            Promotions
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            style={navLinkStyle}
                            onMouseOver={handleHover}
                            onMouseOut={handleMouseOut}
                        >
                            Call-To-action
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppBar;