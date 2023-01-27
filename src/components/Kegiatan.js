import { Card } from "react-bootstrap";

const Kegiatan = (probs) => {
  return (
    <Card>
      <Card.Img variant="top" src={probs.gambar} />
      <Card.Body>
        <Card.Text>{probs.descr}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Kegiatan;
