import { Post } from "../../types";

export default function details(post: Post): string[] {
  return [
    post.topicName,
    post.createdAt,
    post.yesterday,
    post.today,
    post.continued,
    post.blockers,
  ];
}
