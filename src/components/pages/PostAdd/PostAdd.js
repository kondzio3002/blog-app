import { Col } from "react-bootstrap";
import PostAddForm from "../../features/PostAddForm/PostAddForm";

const PostAdd = () => {
  return (
    <Col xs={{ span: 8, offset: 2 }}>
      <h1>Add post</h1>
      <PostAddForm />
    </Col>
  );
};

export default PostAdd;