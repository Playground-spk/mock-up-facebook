import React, { Component } from "react";
import { Col, Row } from "antd";

export default class Homepage extends Component {
  render() {
    return (
      <Col className="Homepage">
        <Row className="nav-home" justify="center">
          <Col className="nav-body"></Col>
        </Row>
        <Row></Row>
      </Col>
    );
  }
}
