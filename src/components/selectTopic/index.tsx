export default function SelectTopic({ topics }) {
  return (
    <datalist id="topics">
      {Object.values(topics).map(({ name, id }) => (
        <option value={name} key={id} />
      ))}
      ;
    </datalist>
  );
}
