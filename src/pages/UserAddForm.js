import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { Routes } from "../routes";

const UserAddForm = () => {
  const [employee, setEmployee] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
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
        <Form.Group as={Col} controlId="formTitle">
          <Form.Label>Title*</Form.Label>
          <Form.Select
            name="title"
            value={employee.title}
            onChange={handleInputChange}
          >
            <option>Please select title</option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </Form.Select>
        </Form.Group>

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
        <Form.Group as={Col} controlId="formGender">
          <Form.Label>Gender*</Form.Label>
          <Form.Select
            name="gender"
            value={employee.gender}
            onChange={handleInputChange}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formDob">
          <Form.Label>Date of Birth*</Form.Label>
          <InputGroup>
            <Form.Control
              type="date"
              name="dob"
              value={employee.dob}
              onChange={handleInputChange}
            />
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email Address*</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            placeholder="Enter email"
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
        <Form.Group as={Col} controlId="formPassword">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={employee.password}
            onChange={handleInputChange}
            placeholder="Enter password"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formConfirmPassword">
          <Form.Label>Confirm Password*</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={employee.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm password"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formRole">
          <Form.Label>Role*</Form.Label>
          <Form.Select
            name="role"
            value={employee.role}
            onChange={handleInputChange}
          >
            <option>Please select role</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Employee</option>
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
        </Button>{" "}
      </div>
    </Form>
  );
};

export default UserAddForm;
