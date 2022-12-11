import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [author, setAuthor] = useState(props.author || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />        
      </Form.Group>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text"value={author} onChange={e => setAuthor(e.target.value)} />        
      </Form.Group>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />        
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={5} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />        
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={15} value={content} onChange={e => setContent(e.target.value)} />    
      </Form.Group>
      <Button variant="primary" className="mt-3" onClick={handleSubmit}>{actionText}</Button>
    </Form>
  );
}

export default PostForm;