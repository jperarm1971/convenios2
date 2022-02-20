import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import LeftMenu from "../../components/leftMenu/LeftMenu";

import "./BasicLayout.scss";

export default function BasicLayout(props) {
    const {children}=props;


  return (
    <Container className="basic-layout">
      <Row>
        <Col>
          <LeftMenu/>
        </Col>
        <Col xs={9} className="basic-layout__content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}