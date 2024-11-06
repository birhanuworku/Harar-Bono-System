// BonoGeneratedUsersTable.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisH,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Button,
  Table,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import UsersData from "../data/UsersData";

export const BonoGeneratedUsersTable = React.forwardRef((props, ref) => {
  // Use React.forwardRef to expose data access to parent component
  React.useImperativeHandle(ref, () => ({
    getData: () => UsersData,
  }));

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
          <Button variant="success" className="fw-bold">
            Re-generate Bono
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
      className="table-wrapper table-responsive shadow-sm m-0"
    >
      <Card.Body className="p-0">
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
      </Card.Body>
    </Card>
  );
});

export default BonoGeneratedUsersTable;
