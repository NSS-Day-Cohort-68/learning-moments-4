import { PostList } from "./components/Posts/PostList.js";
import { Post } from "./components/Posts/Post.js";

export const App = () => {
  return <PostList />;
};

/* All Posts > links to the view of all the posts
My Posts > links to the view of the logged in user's posts
Favorites > links to the view of the logged in user's liked posts
New Post > links to the view of the new post form
Profile > links to the view of the logged in user's profile
Logout > will logout the user

A form for the user to create a new post with a title, body, and topic.

Given the user wishes to create a new post
When the user clicks on New Post in the Nav Bar
Then a form to create a new post will display

Given the user wishes to select a topic for the post
When the user clicks on the topic dropdown
Then a list of the topics should appear

Given the user has entered a title for the post
And the user has entered the body for the post
And the user has selected a topic for the post
When the user clicks the save button
Then the post will save to the database and the application will navigate to the My Posts view
*/
