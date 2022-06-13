import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Card, Popover, Button, Overlay } from "react-bootstrap";

const CatShow = () => {
  const [cat, setCat] = useState({});
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.thecatapi.com/v1/breeds/${id}`
        );
        setCat(data);
      } catch (err) {
			}
    };
    getData();
  }, [id]);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <section>
      <div>
        <Col>
          <Card.Img variant="top" src={cat.img} alt={cat.name} />
          <Card.Body>
            <Card.Title id="show">{cat.name}</Card.Title>
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
                    placement="right"
                    container={ref}
                    containerPadding={20}
                  >
                    <Popover id="popover-contained">
                      <Popover.Header as="h3">Hello!</Popover.Header>
                      <Popover.Body>
                        <strong>{cat.description}</strong>
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </Card.Text>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text">Energy-level: {cat.energy_level}</small>
            <br />
            <small className="text">Dog friendly: {cat.dog_friendly}</small>
            <br />
            <small className="text">Life-span: {cat.life_span}</small>
            <br />
            <small className="text">Origin: {cat.origin}</small>
          </Card.Footer>
        </Col>
      </div>
    </section>
  );
};

export default CatShow;
