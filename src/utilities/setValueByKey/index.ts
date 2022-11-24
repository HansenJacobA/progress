export default function setValueByKey(
  key: string,
  value: Topic | Post | {}
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
