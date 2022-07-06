import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, CardGroup, Card } from "react-bootstrap";
import CatCard from "./CatCard";
import ScrollToTop from "react-scroll-to-top";

const CatIndex = () => {
  const [cat, setCat] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    //  Here we use async to update changes in state
    const getData = async () => {
      try {
        // Here we use axios to make an http request from the api
        const { data } = await axios.get("https://api.thecatapi.com/v1/breeds");
        setCat(data);
      } catch (err) {
        setHasError(true);
      }
    };
    getData();
  }, []);

  return (
    <section>
      <div>
        <Row className="grid-container">
          <CardGroup>
            <Card>
              {/* Here we have a conditional ternary with three operands*/}
              {cat.length > 0 ? (
                <CardGroup>
                  <Card id="cat-map">
                    {cat.map(breed => (
                      <CatCard key={breed.id} {...breed} />
                    ))}
                  </Card>
                </CardGroup>
              ) : (
                <h2 className="index">
                  {hasError ? "Please wait" : "...loading"}
                </h2>
              )}
            </Card>
          </CardGroup>
        </Row>
        <ScrollToTop smooth />
      </div>
    </section>
  );
};

export default CatIndex;
