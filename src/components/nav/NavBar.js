import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/posts">All Posts</Link>
      </li>
      <li className="navbar-item">
        <Link to="/newPost">New Post!</Link>
      </li>
      <li className="navbar-item">
        <Link to="/myPosts">My Posts</Link>
      </li>

      {localStorage.getItem("learning_user") ? (
        <li>
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("learning_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
