import { useSelector } from "react-redux";
import { getPostByCategory } from "../../../redux/postsRedux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { dateToStr } from "../../../utils/dateToStr";

const PostsCategory = () => {

  const { categoryId } = useParams();
  const posts = useSelector(state => getPostByCategory(state, categoryId));

  if(posts.length === 0) return <Navigate to="/" />
  else return (
    <>
      <Card.Title className="mb-4"><strong>Category: {categoryId}</strong></Card.Title>
      <Row xs={1} md={2} lg={3} className="g-4 my-2">
        {posts.map(post => (
          <Col key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title as="h3">{post.title}</Card.Title>
                <Card.Text as="p" className="my-0"><strong>Author: </strong>{post.author}</Card.Text>
                <Card.Text as="p" className="my-0"><strong>Published: </strong>{dateToStr(post.publishedDate)}</Card.Text>
                <Card.Text as="p"><strong>Category: </strong>{post.category}</Card.Text>
                <Card.Text className="mb-4">{post.shortDescription}</Card.Text>
                <Link to={"/post/" + post.id}><Button variant="primary">Read more</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default PostsCategory;