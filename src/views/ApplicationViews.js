import { Outlet, Route, Routes } from "react-router-dom";
import { PostList } from "../components/Posts/PostList.js";
import { NavBar } from "../components/nav/NavBar.js";
import { useEffect, useState } from "react";
import { PostDetails } from "../components/Posts/PostDetails.js";
import { NewPost } from "../components/Posts/NewPost.js";
import { MyPosts } from "../components/Posts/MyPosts.js";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="posts">
          <Route index element={<PostList currentUser={currentUser} />} />
          <Route
            path=":postId"
            element={<PostDetails currentUser={currentUser} />}
          />
        </Route>
        <Route path="newPost" element={<NewPost currentUser={currentUser} />} />

        <Route path="myPosts">
          <Route index element={<MyPosts currentUser={currentUser} />} />
          <Route
            path=":postId"
            element={<PostDetails currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
