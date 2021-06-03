import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faInfo} />

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <Container fluid>
            <h1 className="display-3">{element}{props.title}</h1>
            <p className="lead">
        
            </p>
          </Container>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
