import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";
import { Navigate } from "react-router-dom";

const PostEditForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const getPost = useSelector(state => getPostById(state, id));

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id}));
    navigate('/');
  }

  if(!getPost) return <Navigate to="/" />
  else return (
    <PostForm 
      action={handleSubmit} 
      actionText="Edit post" 
      title={getPost.title}
      author={getPost.author}
      shortDescription={getPost.shortDescription}
      publishedDate={getPost.publishedDate}
      content={getPost.content}
    />
  );
}

export default PostEditForm;