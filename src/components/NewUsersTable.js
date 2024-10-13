import React, { useState } from "react";
import {
  Nav,
  Card,
  Button,
  Table,
  Dropdown,
  Pagination,
  ButtonGroup,
  Form,
  Col,
  Row,
  Modal,
  Spinner,
  ProgressBar,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisH,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import stampImage from "../assets/img/Stamp.png";
import UsersData from "../data/UsersData";

export const NewUsersTable = () => {
  const totalUsers = UsersData.length;
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    middleName: "",
    amount: "",
  });
  const [isGenerating, setIsGenerating] = useState(false); // New state for loading
  const [progress, setProgress] = useState(0); // State for download progress

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleGenerateClick = async () => {
    setIsGenerating(true); // Set loading to true when generation starts
    setProgress(0); // Reset progress

    const doc = new jsPDF();
    const margin = 10;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Bono Details", margin, margin + 10);

    doc.rect(margin, margin + 6, 190, 12);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    const details = [
      { label: "Name of the Company:", value: "Harar Bono System" },
      { label: "Signature of The Company Owner:", value: "Birhanu Worku" },
      { label: "First Name of Owner of the Chat:", value: employee.firstName },
      {
        label: "Middle Name of The owner of the Chat:",
        value: employee.middleName,
      },
      { label: "Amount in ETB of the Chat Paid:", value: employee.amount },
      {
        label: "Date of Bono Generated:",
        value: new Date().toLocaleDateString(),
      },
    ];

    let yOffset = margin + 25;

    // Simulating progress of PDF generation
    for (let i = 0; i < details.length; i++) {
      const lineHeight = 10;
      const detailHeight = 10;

      doc.rect(margin, yOffset + i * lineHeight, 190, detailHeight);
      doc.text(details[i].label, margin + 5, yOffset + i * lineHeight + 7);
      doc.text(details[i].value, margin + 120, yOffset + i * lineHeight + 7);

      // Update progress
      setProgress(((i + 1) / details.length) * 100);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate time delay
    }

    doc.addImage(stampImage, "PNG", 50, 100, 100, 100, undefined, "FAST"); // Overmark stamp at center

    doc.save("bono-details.pdf");
    setIsGenerating(false); // Set loading to false when generation completes
    setShowModal(false);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate } = props;
    return (
      <tr>
        <td>
          <Card.Link as={Link} className="fw-normal">
            {invoiceNumber}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{subscription}</span>
        </td>
        <td>
          <span className="fw-normal">{issueDate}</span>
        </td>
        <td>
          <span className="fw-normal">{dueDate}</span>
        </td>
        <td>
          <span className="fw-normal">${parseFloat(price).toFixed(2)}</span>
        </td>
        <td>
          <Button
            variant="success"
            className="fw-bold"
            onClick={handleShowModal}
          >
            Generate Bono
          </Button>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card
      border="light"
      className="table-wrapper table-responsive shadow-sm mx-0"
    >
      <Card.Body className="pt-0 px-0">
        <Table hover className="user-table align-items-center mb-0">
          <thead style={{ backgroundColor: "rgba(40, 167, 69, 0.5)" }}>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Bill For</th>
              <th className="border-bottom">Issue Date</th>
              <th className="border-bottom">Due Date</th>
              <th className="border-bottom">Total</th>
              <th className="border-bottom">Generate Bono</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {UsersData.map((t) => (
              <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalUsers}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Generate Bono for User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form>
                <h3 className="mb-3">Generate bono for user:</h3>
                <hr />
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
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="text"
                      name="amount"
                      value={employee.amount}
                      onChange={handleInputChange}
                      placeholder="Enter Amount"
                    />
                  </Form.Group>
                </Row>

                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={handleCloseModal}
                    disabled={isGenerating} // Disable button while loading
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="success"
                    className="fw-bold"
                    onClick={handleGenerateClick}
                    disabled={isGenerating} // Disable button while loading
                  >
                    {isGenerating ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />{" "}
                        Generating...
                      </>
                    ) : (
                      "Generate"
                    )}
                  </Button>
                </div>

                {isGenerating && (
                  <div className="mt-3">
                    <ProgressBar
                      now={progress}
                      label={`${progress.toFixed(0)}%`}
                    />
                  </div>
                )}
              </Form>
            </Col>

            <Col md={6} className="border-start">
              <div>
                <h3>Summary of the Bono:</h3>
                <p>
                  <strong>Name of the Company:</strong> Harar Bono System
                </p>
                <p>
                  <strong>First Name:</strong> {employee.firstName}
                </p>
                <p>
                  <strong>Middle Name:</strong> {employee.middleName}
                </p>
                <p>
                  <strong>Amount:</strong> {employee.amount} ETB
                </p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default NewUsersTable;
