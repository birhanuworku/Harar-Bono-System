import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faCalendarAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { AdminsTable } from "../components/AdminsTable";
import { Routes } from "../routes";

export default () => {
  return (
    <>
      <div>
        <h2>Add New Admin to Your System: </h2>
        <br></br>
      </div>
      <Button
        as={Link}
        to={Routes.AdminAddForm.path}
        variant="success"
        className="fw-bold"
      >
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Add New Admin
      </Button>
      <hr />

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <div className="d-flex align-items-center">
              <span className="me-2 fw-bold text-muted">Show</span>

              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  split
                  as={Button}
                  variant="outline-secondary"
                  className="m-0 p-1 d-flex align-items-center justify-content-between"
                  style={{ minWidth: "80px", borderRadius: "5px" }}
                >
                  <span className="text-dark fw-bold">10</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ms-2 text-muted"
                    style={{ fontSize: "12px" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-end shadow-sm">
                  <Dropdown.Item className="fw-bold">10</Dropdown.Item>
                  <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                  <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                  <Dropdown.Item className="fw-bold">50</Dropdown.Item>
                  <Dropdown.Item className="fw-bold">100</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <span className="ms-2 fw-bold text-muted">entries</span>
            </div>
          </Col>

          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
        </Row>
      </div>

      <AdminsTable />
    </>
  );
};
