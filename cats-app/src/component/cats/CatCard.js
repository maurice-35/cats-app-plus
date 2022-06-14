import React, { useState, useRef } from "react";
import { Card, Col, Popover, Button, Overlay } from "react-bootstrap";

const CatCard = ({
  image,
  origin,
  name,
  description,
  energy_level,
  dog_friendly,
  affection_level,
  temperament,
  life_span,
}) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="container2">
      <Card.Header>{name}</Card.Header>
      <Card.Img variant="top" src={image ? image.url : ""} alt={name} />
      <Card.Body>
        <Card.Title id="show">{origin}</Card.Title>
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
          <small className="text">Energy-level: {energy_level}</small>
          <br />
          <small className="text">Dog friendly: {dog_friendly}</small>
          <br />
          <small className="text">Affection-level: {affection_level}</small>
          <br />
          <small className="text">Temperament: {temperament}</small>
          <br />
          <small className="text">Life-span: {life_span}</small>
          <br />
          <small className="text">Origin: {origin}</small>
          <br />
        </Card.Footer>
      </Col>
    </div>
  );
};

export default CatCard;
