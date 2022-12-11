import { Col } from "react-bootstrap";
import PostEditForm from "../../features/PostEditForm/PostEditForm";

const PostEdit = () => {
  return (
    <Col xs={{ span: 8, offset: 2 }}>
      <h1>Edit post</h1>
      <PostEditForm />
    </Col>
  );
};

export default PostEdit;