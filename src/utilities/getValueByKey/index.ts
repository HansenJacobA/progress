export default function getValueByKey(key: string) {
  const storedValue = JSON.parse(localStorage.getItem(key));
  return storedValue;
}
