import React from "react";
import {Row, Col, Button} from 'reactstrap'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponent = () => {
  return (
    <Row>
      <Col className="mb-2">
        <Link to="/">
          <Button color="dark">
            <FontAwesomeIcon icon={faArrowLeft} /> Back 
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;
