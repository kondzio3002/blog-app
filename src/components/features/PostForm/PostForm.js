import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [author, setAuthor] = useState(props.author || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');
  const [categoryError, setCategoryError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const categories = useSelector(getAllCategories);

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    setCategoryError(!category);
    if(content && publishedDate && category) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          {...register("title", { required: true, minLength: 3 })}
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        /> 
        {errors.title && <small className="d-block form-text text-danger mt-2">This field is too short (min is 3)</small>}       
      </Form.Group>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          {...register("author", { required: true, minLength: 3 })}
          type="text"
          value={author} 
          onChange={e => setAuthor(e.target.value)} 
        /> 
        {errors.author && <small className="d-block form-text text-danger mt-2">This field is too short (min is 3)</small>}            
      </Form.Group>
      <Form.Group className="col-6 mt-3">
        <Form.Label>Published</Form.Label>
        <DatePicker 
          selected={publishedDate} 
          onChange={(date) => setPublishedDate(date)} 
        /> 
        {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}       
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option>Select category...</option>
          {categories.map(category => 
            <option value={category.name}>{category.name}</option>
          )}
        </Form.Select>
        {categoryError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea" 
          rows={5} 
          value={shortDescription} 
          onChange={e => setShortDescription(e.target.value)} 
        /> 
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is too short (min is 20)</small>}        
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Main content</Form.Label>
        <ReactQuill 
          value={content} 
          onChange={setContent} 
        />  
        {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}  
      </Form.Group>
      <Button variant="primary" className="mt-3" type="submit">{actionText}</Button>
    </Form>
  );
}

export default PostForm;