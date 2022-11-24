import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function seedUp(): void {
  if (getValueByKey("topics") === null) {
    setValueByKey("topics", {});
  }
}
