import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CatCard = ({ id, image, origin, name }) => {
  return (
    <div className="container2">
      <Link to={`/cats/${id}`}>
			<Card.Header>{name}</Card.Header>
        <Card.Img variant="top" img src={image ? image.url : ''} alt={name} />
        <Card.Body>
          <Card.Title id="show">{origin}</Card.Title>
        </Card.Body>
      </Link>
    </div>
  );
};

export default CatCard;
