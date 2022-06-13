import React, { useEffect } from 'react'
import axios from 'axios'
import { Card, ListGroup } from 'react-bootstrap'

const App = () => {


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')
        console.log(data);
      } catch (err) {
    };
  }
    getData();
  }, []);


  return (
    <section>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Description
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Energy-level</ListGroup.Item>
            <ListGroup.Item>Dog friendly</ListGroup.Item>
            <ListGroup.Item>Life-span</ListGroup.Item>
            <ListGroup.Item>Origin</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </section>
  )
}

export default App