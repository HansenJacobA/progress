import getValueByKey from "../getValueByKey";

export default function removeValueByKey(key: string): void | Error {
  if (getValueByKey(key) === null) {
    return new Error("Key does not exist in storage");
  }
  localStorage.removeItem(key);
}
