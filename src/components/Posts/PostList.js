import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/PostServices.js";
import { Post } from "./Post.js";
import { PostDropdown, PostSearch } from "./PostFilterBar.js";

export const PostList = () => {
  const [posts, setAllPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [topicId, setTopicId] = useState("");
  const [filterTopic, setFilterTopic] = useState("");

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
      setFilterPosts(postsArray);
    });
  }, []);

  useEffect(() => {
    const foundPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        post.topicId === +topicId
    );

    setFilterPosts(foundPosts);
  }, [searchTerm, topicId]);

  // useEffect(() => {
  //   const foundTopics = posts.filter((post) =>
  //     post.topic.includes(searchTerm.toLowerCase())
  //   );
  //   setFilterPosts(foundPosts);
  // }, [searchTerm, posts]);

  // useEffect(() => {
  //   const foundTopics = posts.filter((post) => post.topicId === +topicId);
  //   setFilterPosts(foundTopics);
  // }, [topicId]);

  // useEffect(() => {
  //   if (searchTerm === "" && topicId === "") {
  //     setFilterPosts(posts);
  //   }
  // }, [filterPosts]);

  return (
    <section>
      <h2>Posts</h2>
      <PostDropdown setTopicId={setTopicId} />
      <PostSearch
        setFilterPosts={setFilterPosts}
        setSearchTerm={setSearchTerm}
      />
      <div className="posts">
        {filterPosts.map((postObj) => {
          return <Post key={postObj.id} post={postObj} />;
        })}
      </div>
    </section>
  );
};
