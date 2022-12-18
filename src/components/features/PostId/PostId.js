import { useSelector, useDispatch } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams, Navigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { dateToStr } from "../../../utils/dateToStr";

const PostId = () => {

  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemovePost = e => {
    e.preventDefault();
    dispatch(removePost(post.id))
    handleClose();
  };

  if(!post) return <Navigate to="/" />
  else return (
    <>
      <Row>
        <Col xs={{ span: 6, offset: 2 }}> 
          <Card.Title as="h3">{post.title}</Card.Title>
          <Card.Text as="p" className="my-0"><strong>Author: </strong>{post.author}</Card.Text>
          <Card.Text as="p"><strong>Published: </strong>{dateToStr(post.publishedDate)}</Card.Text>
          <Card.Text className="mb-4" dangerouslySetInnerHTML={{ __html: post.content}} />
        </Col>
        <Col>
          <Link to={"/post/edit/" + post.id}><Button variant="outline-info">Edit</Button></Link>{' '}
          <Button className="my-1" variant="outline-danger" onClick={handleShow}>Delete</Button>
        </Col>       
      </Row>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This operation will completely remove this post from the app.<br></br>
        Are you sure you want to do that?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleRemovePost}>Remove</Button>
      </Modal.Footer>
      </Modal>  
    </>
  );
};

export default PostId;