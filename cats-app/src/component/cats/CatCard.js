import React, { useState, useRef } from "react";
import { Card, Col, Popover, Button, Overlay } from "react-bootstrap";

const CatCard = ({
  image,
  origin,
  name,
  description,
  energy_level,
  child_friendly,
  dog_friendly,
  intelligence,
  social_needs,
  health_issues,
  adaptability,
  vocalisation,
  affection_level,
  temperament,
  grooming,
  life_span,
  weight,
}) => {
  // We use useState to enhance performance
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  // Here we use ref to acces the elements in the 'description' & 'click me' below to change the child component's value
  const ref = useRef(null);

  // Here, we pass a function as an event listener
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="container2">
      <Card.Header>{name}</Card.Header>
      <Card.Img variant="top" src={image ? image.url : ""} alt={name} />
      <Card.Body>
        <Card.Title id="show1">{origin}</Card.Title>
      </Card.Body>
      <Col>
        <Card.Body>
          <Card.Title id="show">{name}</Card.Title>
          <div>
            <div ref={ref}>
              <Card.Text>
                Description
                <Button
                  variant="outline-success"
                  id="button"
                  onClick={handleClick}
                >
                  Click me!
                </Button>
                <Overlay
                  show={show}
                  target={target}
                  placement="bottom"
                  container={ref}
                  containerPadding={20}
                >
                  <Popover id="popover-contained">
                    <Popover.Header as="h3">Hello!</Popover.Header>
                    <Popover.Body>
                      <strong>{description}</strong>
                    </Popover.Body>
                  </Popover>
                </Overlay>
              </Card.Text>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
            <small className="text">Energy Level: {energy_level}</small>
            <br />
            <small className="text">Dog Friendly: {dog_friendly}</small>
            <br />
            <small className="text">Child Friendly: {child_friendly}</small>
            <br />
            <small className="text">Intelligence: {intelligence}</small>
            <br />
            <small className="text">Social Needs: {social_needs}</small>
            <br />
            <small className="text">Affection Level: {affection_level}</small>
            <br />
            <br />
            <small className="text">Adaptability: {adaptability}</small>
            <br />
            <small className="text">Vocalisation: {vocalisation}</small>
            <br />
            <small className="text">Health Issues: {health_issues}</small>
            <br />
            <small className="text">Temperament: {temperament}</small>
            <br />
            <small className="text">Grooming: {grooming}</small>
            <br />
            <small className="text">Life-span: {life_span}</small>
            <br />
            <small className="text">
              Imperial Weight: {weight ? weight.imperial : ""}
            </small>
            <br />
            <small className="text">Origin: {origin}</small>
            <br />
        </Card.Footer>
      </Col>
    </div>
  );
};

export default CatCard;
