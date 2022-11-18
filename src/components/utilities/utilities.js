export const ALL_TOPICS = "allTopics";
export const ALL_POSTS = "allPosts";

export const getItem = (key) => JSON.parse(localStorage.getItem(key));

export const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const clearLocalStorage = (e) => {
  localStorage.removeItem(ALL_TOPICS);
  localStorage.removeItem(ALL_POSTS);
};
