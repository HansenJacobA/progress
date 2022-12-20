import { Topic } from "../../types";
import getValueByKey from "../getValueByKey";
import removeValueByKey from "../removeValueByKey";

export default function seedDown(): void {
  const topics = getValueByKey("topics");
  Object.values(topics).forEach((topic: Topic) => {
    removeValueByKey(topic.id);
  });
  removeValueByKey("topics");
}
