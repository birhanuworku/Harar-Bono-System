// BonoGeneratedUsers.js
import React, { useRef } from "react";
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
import * as XLSX from "xlsx";

import BonoGeneratedUsersTable from "../components/BonoGeneratedUsersTable";
import { Routes } from "../routes";

export default () => {
  const tableRef = useRef(null); // Reference to access getData in BonoGeneratedUsersTable

  const handleDownload = () => {
    // Retrieve data from BonoGeneratedUsersTable
    const data = tableRef.current.getData();

    // Convert data to Excel format
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bono Generated Users");

    // Trigger Excel file download
    XLSX.writeFile(workbook, "BonoGeneratedUsersData.xlsx");
  };

  return (
    <>
      <div>
        <h2>Your Bono Generated Users:</h2>
        <hr />
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex align-items-center">
          <Row className="align-items-center">
            <Col xs="auto">
              <label className="fw-bold">Select Start Date to Filter:</label>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </InputGroup.Text>
                <Form.Control type="date" className="form-control" />
              </InputGroup>
            </Col>

            <Col xs="auto">
              <label className="fw-bold">Select End Date to Filter:</label>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </InputGroup.Text>
                <Form.Control type="date" className="form-control" />
              </InputGroup>
            </Col>

            <Col xs="auto">
              <Button
                variant="success"
                className="fw-bold text-nowrap ms-4"
                style={{ borderRadius: "8px" }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>

        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button
              variant="success"
              size="lg"
              className="me-2 fw-bold"
              style={{
                borderRadius: "8px",
              }}
              onClick={handleDownload}
            >
              Download
            </Button>
          </ButtonGroup>
        </div>
      </div>
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

      <BonoGeneratedUsersTable ref={tableRef} />
    </>
  );
};
