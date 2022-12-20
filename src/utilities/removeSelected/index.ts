import { Post } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function removeSelected(
  topicId: string,
  indicesToRemove: boolean[]
): Post[] {
  const posts = getValueByKey(topicId);

  const savedPosts = posts.filter(
    (_: Post, index: number) => !indicesToRemove[index]
  );

  setValueByKey(topicId, savedPosts);

  return savedPosts;
}
