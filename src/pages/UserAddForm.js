import React, { useState } from "react";
import { Form, Button, Col, Row } from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { Routes } from "../routes";

const UserAddForm = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    chatType: "",
    paidStatus: "",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <Form>
      <h5 className="mb-3">Add New User</h5>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First Name*</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastName">
          <Form.Label>Last Name*</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            name="middleName"
            value={employee.middleName}
            onChange={handleInputChange}
            placeholder="Enter middle name"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone Number*</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formChatType">
          <Form.Label>Chat Type*</Form.Label>
          <Form.Select
            name="chatType"
            value={employee.chatType}
            onChange={handleInputChange}
          >
            <option>Please select chat type</option>
            <option>Private</option>
            <option>Group</option>
            <option>Broadcast</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formPaidStatus">
          <Form.Label>Paid Status*</Form.Label>
          <Form.Select
            name="paidStatus"
            value={employee.paidStatus}
            onChange={handleInputChange}
          >
            <option>Please select paid status</option>
            <option>Paid</option>
            <option>Unpaid</option>
            <option>Pending</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-end">
        <Button variant="primary" className="me-2" onClick={handleBackClick}>
          Back
        </Button>
        <Button
          as={Link}
          to={Routes.NewUsers.path}
          variant="success"
          className="fw-bold"
        >
          Save
        </Button>
      </div>
    </Form>
  );
};

export default UserAddForm;
