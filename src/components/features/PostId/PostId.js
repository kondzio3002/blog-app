import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PostId = () => {

  const { id } = useParams();
  const posts = useSelector(state => getPostById(state, id));

  return (
    <Row>
      <Col xs={{ span: 6, offset: 2 }}> 
        <Card.Title as="h3">{posts.title}</Card.Title>
        <Card.Text as="p" className="my-0"><strong>Author: </strong>{posts.author}</Card.Text>
        <Card.Text as="p"><strong>Published: </strong>{posts.publishedDate}</Card.Text>
        <Card.Text className="mb-4">{posts.content}</Card.Text>
      </Col>
      <Col>
        <Link to={"/post/edit/" + posts.id}><Button variant="outline-info">Edit</Button></Link>{' '}
        <Button className="my-1" variant="outline-danger">Delete</Button>
      </Col>         
    </Row>
  );
};

export default PostId;