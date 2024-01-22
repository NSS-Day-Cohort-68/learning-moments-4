import React from "react";
import { NewPostForm } from "../forms/NewPostForm.js";

export const NewPost = ({ currentUser }) => {
  return (
    <div>
      <NewPostForm currentUser={currentUser} />
    </div>
  );
};
