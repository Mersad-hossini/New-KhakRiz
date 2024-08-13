import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function PlaceHolder() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "21rem" }}>
        <Card.Img variant="top" src="/images/placeholder.png" />
        <Card.Body>
          <Placeholder className="text-center" as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder.Button className="w-100" variant="success" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default PlaceHolder;
