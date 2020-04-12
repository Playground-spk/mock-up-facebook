import React, { Component } from "react";
import "../Style/Homepage/NavHome.css";
import { Row, Col, Input, Button } from "antd";

const { Search } = Input;

export default class NavHome extends Component {
  render() {
    return (
      <Row className="nav-home" justify="center" align="middle">
        <div style={{ paddingRight: "205px", height: "100%" }}>
          <Col className="nav-body">
            <Row
              align="middle"
              justify="space-between"
              style={{ height: "100%" }}
            >
              <Col>
                <Row className="left">
                  <Col className="logo-icon">facebook</Col>
                  <Col className="search-bar">
                    <form>
                      <Row
                        style={{ width: "100%", height: "100%" }}
                        justify="space-between"
                      >
                        <Col>
                          <input
                            type="text"
                            className="input-search"
                            placeholder="ค้นหา"
                          />
                        </Col>
                        <Col>
                          <Button className="icon-search">
                            <div></div>
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Row>
              </Col>
              <Col style={{ height: "100%" }}>
                <Row className="right" align="middle">
                  <Col className="avatar-main">
                    <Row style={{ width: "74px", height: "100%" }}>
                      <Col className="avatar">
                        <img
                          className="avatar"
                          src="https://scontent.futp1-1.fna.fbcdn.net/v/t1.0-9/p960x960/55564273_1100669830136257_2977309224083652608_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeHkz2oCMLj7k5D3E-R_MvnGV8XwnTVj771XxfCdNWPvvRYa0tbDYVllZDzLl25DsdUQbeWJmQTvRsACaFPR7Zo1&_nc_ohc=vFdtu0rxgcwAX9bQeMA&_nc_ht=scontent.futp1-1.fna&_nc_tp=6&oh=4eca43e290eaefb3a6a85d62e0ebe227&oe=5EBA2823"
                          alt=""
                        />
                      </Col>
                      <Col>name</Col>
                    </Row>
                  </Col>
                  <Col className="icon-menu"> icon menu</Col>
                  <Col className="help-menu"> help menu</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
    );
  }
}
