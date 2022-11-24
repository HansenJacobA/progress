export default function getValueByKey(key: string): {} | Post[] | null {
  const storedValue = JSON.parse(localStorage.getItem(key));
  return storedValue;
}
