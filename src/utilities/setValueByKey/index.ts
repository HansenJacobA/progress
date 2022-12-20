import { Topic, Post } from "../../types";

export default function setValueByKey(
  key: string,
  value: Topic | Post[] | Record<string, never>
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
