import { Card } from "react-bootstrap";
export const Footer = () => {
  return (
    <Card className="text-center" size="lg">
      <Card.Body>
        <Card.Title>
          Learn from Anywhere, Learn Anytime,Learn Anything
        </Card.Title>
        <Card.Text>
          When it comes to eLearning, content means everything. If eLearning
          content is not masterfully designed, all the rest will just go down
          the drain
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        © 2021 LearnFree Inc. All rights reserved.
      </Card.Footer>
    </Card>
  );
};
export default Footer;
