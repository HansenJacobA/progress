import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function removeSelected(topicId, indicesToRemove) {
  const posts = getValueByKey(topicId);
  const savedPosts = posts.filter((_, index) => !indicesToRemove[index]);
  setValueByKey(topicId, savedPosts);
  return savedPosts;
}
