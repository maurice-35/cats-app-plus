import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, CardGroup, Card } from 'react-bootstrap'
import CatCard from "./CatCard";

const App = () => {
	const [cat, setCat] = useState([])
	const [hasError, setHasError] = useState(false);


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')
        console.log('DATA', data);
				setCat(data)
      } catch (err) {
				setHasError(true);
    };
  }
    getData();
  }, []);

  return (
		<div>
      <Row className="grid-container">
        <CardGroup>
          <Card>
            {cat.length > 0 ? (
              <CardGroup>
                <Card id="cat-map">
                  {cat.map((item) => (
                    <CatCard key={item.id} {...item} />
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
    </div>
  )
}

export default App