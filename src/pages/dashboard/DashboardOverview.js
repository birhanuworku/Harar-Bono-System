import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMoneyBillWave,
  faRocket,
  faUserShield,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState("Last 7 days");

  const handleSelect = (eventKey) => {
    setTimePeriod(eventKey);
  };

  const stats = [
    {
      title: "Total New Users",
      count: "1,200",
      percentage: "+6%",
      icon: faUsers,
      color: "success",
    },
    {
      title: "Total Income",
      count: "$50,000",
      percentage: "+8%",
      icon: faMoneyBillWave,
      color: "success",
    },
    {
      title: "Total Bono-Generated Users",
      count: "350",
      percentage: "+10%",
      icon: faRocket,
      color: "success",
    },
    {
      title: "Total Admins",
      count: "5",
      percentage: "+0%",
      icon: faUserShield,
      color: "success",
    },
    {
      title: "Total Combined Users",
      count: "1,550",
      percentage: "+7%",
      icon: faUsers,
      color: "success",
    },
    {
      title: "Total Combined Users",
      count: "1,550",
      percentage: "+7%",
      icon: faUsers,
      color: "success",
    },
  ];

  return (
    <Row className="mt-4">
      <Col xs={12}>
        <Card className="shadow-sm h-100">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Dashboard</h4>
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle
                variant="outline-success"
                className="text-muted d-flex align-items-center"
                id="dropdown-basic"
              >
                {timePeriod}
                <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Today">Today</Dropdown.Item>
                <Dropdown.Item eventKey="Last 7 days">
                  Last 7 days
                </Dropdown.Item>
                <Dropdown.Item eventKey="Last 30 days">
                  Last 30 days
                </Dropdown.Item>
                <Dropdown.Item eventKey="Last 3 months">
                  Last 3 months
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} className="my-4">
        <Row>
          {stats.map((stat, index) => (
            <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
              <Card
                className="shadow-lg border-0 rounded-4"
                style={{ height: "180px" }}
              >
                <Card.Body className="d-flex align-items-center">
                  <div
                    className={`bg-${stat.color} text-white rounded-circle d-flex justify-content-center align-items-center me-3`}
                    style={{ width: "60px", height: "60px" }}
                  >
                    <FontAwesomeIcon icon={stat.icon} size="2x" />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="text-muted mb-1">{stat.title}</h6>
                    <h3 className="mb-0">{stat.count}</h3>
                    <p
                      className={`text-${
                        stat.percentage.includes("-") ? "danger" : "success"
                      }`}
                    >
                      {stat.percentage}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
