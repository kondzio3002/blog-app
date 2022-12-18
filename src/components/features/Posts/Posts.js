import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { dateToStr } from "../../../utils/dateToStr";

const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <Row xs={1} md={2} lg={3} className="g-4 my-2">
      {posts.map(post => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title as="h3">{post.title}</Card.Title>
              <Card.Text as="p" className="my-0"><strong>Author: </strong>{post.author}</Card.Text>
              <Card.Text as="p"><strong>Published: </strong>{dateToStr(post.publishedDate)}</Card.Text>
              <Card.Text className="mb-4">{post.shortDescription}</Card.Text>
              <Link to={"/post/" + post.id}><Button variant="primary">Read more</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;