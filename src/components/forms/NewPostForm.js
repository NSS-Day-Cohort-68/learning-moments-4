import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../../services/TopicServices.js";
import { createNewPost } from "../../services/PostServices.js";

export const NewPostForm = ({ currentUser, post }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [allTopics, setAllTopics] = useState([]);
  const [topicId, setTopicId] = useState(0);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    getTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
    });
  }, []);

  useEffect(() => {
    if (currentUser.id) {
      setUserId(currentUser.id);
    }
  }, [currentUser.id]);

  const handleNewPost = () => {
    const newPost = {
      userId: userId,
      topicId: parseInt(topicId),
      title: postTitle,
      body: postBody,
      date: new Date(),
    };
    createNewPost(newPost);
  };

  return (
    <form className="profile">
      <h2>New Post</h2>
      <fieldset>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            value={post?.title}
            onChange={(event) => {
              let newPostTitle = event.target.value;
              setPostTitle(newPostTitle);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Post Body: </label>
          <input
            type="text"
            value={post?.body}
            onChange={(event) => {
              let newPostBody = event.target.value;
              setPostBody(newPostBody);
            }}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Select Topic </label>
          <select
            onChange={(event) => {
              setTopicId(event.target.value);
            }}
          >
            <option key={0} value={0}>
              Select a Topic!
            </option>
            {allTopics.map((topic) => {
              return (
                <option key={topic.id} value={topic.id}>
                  {topic.name}{" "}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button onClick={handleNewPost} className="form-btn btn-primary">
            Post Post!
          </button>
        </div>
      </fieldset>
    </form>
  );
};
