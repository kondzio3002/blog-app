import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const PostAddForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/');
  }

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  );
}

export default PostAddForm;