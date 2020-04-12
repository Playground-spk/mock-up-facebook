import React, { Component } from "react";
import { Col, Row } from "antd";
import NavHome from "./NavHome";

export default class Homepage extends Component {
  render() {
    return (
      <Col className="Homepage">
        <NavHome />

        <Row justify="center" align="middle">
          body home pages
        </Row>
      </Col>
    );
  }
}
