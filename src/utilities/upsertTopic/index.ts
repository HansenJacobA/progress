import { nanoid } from "nanoid";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";
import { Topic } from "../../types";

export default function upsertTopic(data: Topic): string {
  const topics = getValueByKey("topics");

  let topic = topics[data.name];

  if (topic) {
    topic = {
      ...topic,
      updatedAt: new Date().toLocaleString(),
    };
  } else {
    topic = {
      id: nanoid(),
      name: data.name,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
  }

  setValueByKey("topics", { ...topics, [data.name]: topic });

  return topic.id;
}
