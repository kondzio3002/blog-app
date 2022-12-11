import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import { Form, Button } from "react-bootstrap";

const PostAddForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title, shortDescription, content, publishedDate, author }));
    navigate('/');
  }

  return (
    <Form>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" placeholder="Enter published date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={15} placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)} />
      </Form.Group>
      <Button variant="primary" className="mt-3" onClick={handleSubmit}>Add post</Button>
    </Form>
  );
}

export default PostAddForm;