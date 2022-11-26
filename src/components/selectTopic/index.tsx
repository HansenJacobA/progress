import React from "react";

export default function SelectTopic({ topics }: { topics: Topic[] }) {
  return (
    <datalist id="topics">
      {topics.map(({ name, id }: { name: string; id: string }) => (
        <option value={name} key={id} />
      ))}
      ;
    </datalist>
  );
}
