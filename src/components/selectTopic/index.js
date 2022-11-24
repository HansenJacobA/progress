export default function SelectTopic({ allTopics }) {
  return (
    <datalist id="topics">
      {allTopics.map(({ name, id }) => (
        <option value={name || "No Name"} key={id} />
      ))}
      ;
    </datalist>
  );
}
