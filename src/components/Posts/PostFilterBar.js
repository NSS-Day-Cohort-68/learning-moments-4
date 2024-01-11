import { useEffect, useState } from "react";
import { getTopics } from "../../services/TopicServices.js";

export const PostSearch = ({ setSearchTerm }) => {
  return (
    <div className="filter-bar">
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
          console.log(event.target.value);
        }}
        type="text"
        placeholder="Search Posts"
        className="post-search"
      />
    </div>
  );
};
export const PostDropdown = ({ setTopicId }) => {
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
    });
  }, []);

  if (allTopics) {
    return (
      <div className="filter-bar">
        <select
          onChange={(event) => {
            setTopicId(event.target.value);
          }}
          id="post-topic"
        >
          <option key={0} value={0}>
            Select topic
          </option>
          {allTopics.map((topic) => {
            return (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
};
