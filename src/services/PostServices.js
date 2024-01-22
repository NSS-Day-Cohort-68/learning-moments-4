export const getAllPosts = () => {
  return fetch(
    "http://localhost:8088/posts?_expand=user&_expand=topic&_embed=likes"
  ).then((res) => res.json());
};

export const getPostDetailsById = (postId) => {
  return fetch(
    `http://localhost:8088/posts?id=${postId}&_expand=topic&_embed=likes`
  ).then((res) => res.json());
};

export const createNewPost = (post) => {
  return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((res) => res.json());
};
