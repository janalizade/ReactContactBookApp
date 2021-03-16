import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/postAction";
import { useParams } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const { id } = useParams();
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = () => {
    dispatch(getPost(id));
  };

  if (!post) {
    return <h1>loading..</h1>;
  }
  return (
    <div>
      <img
        src={`https://source.unsplash.com/collection/${post.id}/1920x700`}
        alt={post.title}
        className="img-fluid"
      />
      <div className="container">
        <div className="py-5">
          <h1 className="display-4 mb-3">{post.title}</h1>
          <p className="lead">{post.body}</p>
          <p className="lead">
          
          </p>
          <p className="lead">
            
          </p>
          <p className="lead">
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
