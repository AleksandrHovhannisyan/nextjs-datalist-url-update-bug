const values = ["a", "b", "c"];

export default function Home() {
  return (
    <label>
      Pick a value
      <select defaultValue={values[1]}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
}
