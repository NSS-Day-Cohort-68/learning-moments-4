import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetailsById } from "../../services/PostServices.js";
import { createLikes } from "../../services/LikeServices.js";

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const { postId } = useParams(); //customerId

  useEffect(() => {
    getPostDetailsById(postId).then((postObj) => {
      setPost(postObj[0]);
    });
  }, []);

  const handleEditPost = () => {};

  const handleLikePost = (event) => {
    if (currentUser.id) {
      const newLikes = {
        postId: post?.id,
        userId: currentUser.id,
      };
      createLikes(newLikes);
    }
  };

  if (currentUser.id === post.userId) {
    return (
      <section className="post">
        <div>
          <div>Post #{post.id}</div>
          <span className="post-info"> Title: </span>
          {post.title}
          <span className="post-info"> Date: </span>
          {post.date}
          <span className="post-info"> Body: </span>
          {post.body}
          <span className="post-info"> topic: </span>
          {post.topic?.name}
          <span className="post-info"> Number of Likes: </span>
          {post.likes?.length}
          <button onClick={handleEditPost}>Edit Post</button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="post">
        <div>
          <div>Post #{post.id}</div>
          <span className="post-info"> Title: </span>
          {post.title}
          <span className="post-info"> Date: </span>
          {post.date}
          <span className="post-info"> Body: </span>
          {post.body}
          <span className="post-info"> topic: </span>
          {post.topic?.name}
          <span className="post-info"> Number of Likes: </span>
          {post.likes?.length}
        </div>
        <button onClick={handleLikePost}>Like</button>
      </section>
    );
  }
};
