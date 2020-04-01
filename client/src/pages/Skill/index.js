import React from 'react';
import { Progress } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './style.css'

export default function index() {
  return (

    <div className="color">
     <Container>
      <h2>... Skills ...</h2>
      <h3>​Versatile Front-end Developer with strong communication and problem-solving skills.
         Specializes in HTML5, CSS, JQuery , Javascript and ​React.Js
         </h3>
     
        <Row>
          <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">HTML</div>
            <Progress  value="90">90%</Progress>
          </Col>

          <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">react.js</div>
            <Progress value="70">70%</Progress>
          </Col>
        </Row>
        <Row>
        <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">css</div>
            <Progress value="80">80%</Progress>
          </Col>

          <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">node.js</div>
            <Progress value="50">50%</Progress>
          </Col>
        </Row>
        <Row>
        <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">Javascript</div>
            <Progress value="75">75%</Progress>
          </Col>

          <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">mysql</div>
            <Progress value="40">40%</Progress>
          </Col>
        </Row>
        <Row>
        <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">JQuery</div>
            <Progress value="60">60%</Progress>
          </Col>

          <Col sm={{ size: 6, offset: 0 }}>
            <div className="text-lift">bootstrap</div>
            <Progress value="80">80%</Progress>
          </Col>
        </Row>
        </Container>
    </div>
  )
}
