import Posts from "../../features/Posts/Posts";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>All posts</h1>
        </Col>  
        <Col className="text-end">
          <Link to="/post/add"><Button className="mb-5" variant="outline-info">Add post</Button></Link>
        </Col>
      </Row>  
      <Posts />
    </>
  );
};

export default Home;