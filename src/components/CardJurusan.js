import React from "react";
import { Card, Button } from "react-bootstrap";

const CardJurusan = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.gambar} />
      <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardJurusan;
