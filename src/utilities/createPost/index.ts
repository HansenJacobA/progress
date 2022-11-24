import { nanoid } from "nanoid";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function createPost(data: Post): void {
  const topics = getValueByKey("topics");
  const topic = topics[data.topicName];

  const post = {
    id: nanoid(),
    topicId: data.topicId,
    topicName: data.topicName,
    yesterday: data.yesterday,
    today: data.today,
    continued: data.continued,
    blockers: data.blockers,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  const topicPreviousPosts = getValueByKey(topic.id);
  if (Array.isArray(topicPreviousPosts)) {
    setValueByKey(topic.id, [post, ...topicPreviousPosts]);
  } else {
    setValueByKey(topic.id, [post]);
  }
}
