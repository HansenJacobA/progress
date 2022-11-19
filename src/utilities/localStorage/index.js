export const ALL_TOPICS_KEY = "allTopics";
export const ALL_POSTS_KEY = "allPosts";

export const getLocalStorageKeyValue = (key) =>
  JSON.parse(localStorage.getItem(key));

export const setLocalStorageKeyValue = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const deleteAllPosts = () => {
  localStorage.removeItem(ALL_TOPICS_KEY);
  localStorage.removeItem(ALL_POSTS_KEY);
};
