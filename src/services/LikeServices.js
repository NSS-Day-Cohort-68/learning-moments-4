export const getAllLikes = () => {
  return fetch(
    "http://localhost:8088/posts?_expand=user&_expand=topic&_embed=likes"
  ).then((res) => res.json());
};

export const createLikes = (user) => {
  return fetch("http://localhost:8088/likes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};
