import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelopeOpen,
  faSignOutAlt,
  faUserShield,
  faHome,
  faConciergeBell,
  faBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Row,
  Col,
  Nav,
  Image,
  Navbar,
  Dropdown,
  Container,
  ListGroup,
  Accordion,
} from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";
import { Offcanvas } from "react-bootstrap";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";

export default (props) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [offcanvasTitle, setOffcanvasTitle] = useState("");
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    history.push(Routes.Signin.path);
  };
  const handleSettings = () => {
    history.push(Routes.Settings.path);
  };
  const handleShowOffcanvas = (title) => {
    setOffcanvasTitle(title);
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const getAccordionContent = (title) => {
    switch (title) {
      case "Services":
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="text-success">Service 1</span>
              </Accordion.Header>
              <Accordion.Body>
                Detailed information about Service 1 goes here.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className="text-success">Service 2</span>
              </Accordion.Header>
              <Accordion.Body>
                Detailed information about Service 2 goes here.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      case "User Guide":
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="text-success">Getting Started</span>
              </Accordion.Header>
              <Accordion.Body>
                Information about getting started with the app.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className="text-success">Advanced Features</span>
              </Accordion.Header>
              <Accordion.Body>
                Details about the app's advanced features.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      case "Contacts":
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="text-success">Customer Support</span>
              </Accordion.Header>
              <Accordion.Body>
                Contact information for customer support.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className="text-success">Sales Department</span>
              </Accordion.Header>
              <Accordion.Body>
                Information about the sales department.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar
        variant="light"
        expanded
        className="ps-0 pe-2 pb-0 bg-light shadow mb-4 sticky-navbar"
      >
        <Container fluid className="px-0">
          <div className="d-flex justify-content-between w-100">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className="d-flex align-items-center text-success fw-bold ms-3"
              >
                <FontAwesomeIcon icon={faHome} className="me-2" /> HOME
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="d-flex align-items-center text-success fw-bold ms-3"
                onClick={() => handleShowOffcanvas("Services")}
              >
                <FontAwesomeIcon icon={faConciergeBell} className="me-2" />{" "}
                SERVICES
              </Nav.Link>
              <Nav.Link
                href="#guide"
                className="d-flex align-items-center text-success fw-bold ms-3"
                onClick={() => handleShowOffcanvas("User Guide")}
              >
                <FontAwesomeIcon icon={faBook} className="me-2" /> USER GUIDE
              </Nav.Link>
              <Nav.Link
                href="#contacts"
                className="d-flex align-items-center text-success fw-bold ms-3"
                onClick={() => handleShowOffcanvas("Contacts")}
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> CONTACTS
              </Nav.Link>
            </Nav>

            <Nav className="align-items-center">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                  <div className="media d-flex align-items-center">
                    <Image
                      src={Profile3}
                      className="user-avatar md-avatar rounded-circle"
                    />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold">
                        Bonnie Green
                      </span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold" onClick={handleSettings}>
                    <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item className="fw-bold" onClick={handleLogout}>
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="text-danger me-2"
                    />{" "}
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-success">
            {offcanvasTitle}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{getAccordionContent(offcanvasTitle)}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
