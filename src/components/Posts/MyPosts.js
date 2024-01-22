import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/PostServices.js";
import { PostDropdown } from "./PostFilterBar.js";
import { PostSearch } from "./PostFilterBar.js";
import { Link } from "react-router-dom";
import { Post } from "./Post.js";

export const MyPosts = ({ currentUser }) => {
  const [myPosts, setMyPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  //   useEffect(() => {
  //     const posts = getAllPosts();
  //     if (posts) {
  //       posts.filter((post) => {
  //         if (currentUser.id === post.userId) {
  //           setMyPosts(post);
  //         }
  //       });
  //   }, []);

  return (
    <section>
      <h2>My Posts</h2>

      <div className="posts">
        {myPosts.map((postObj) => {
          return (
            <Link key={postObj.id} to={`/posts/${postObj.id}`}>
              <Post key={postObj.id} post={postObj} />;
            </Link>
          );
        })}
      </div>
    </section>
  );
};
