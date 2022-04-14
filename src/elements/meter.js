export default function Meter({ count, setCount }) {
  return (
    <div className="meter">
      <span
        className="meter-control"
        onClick={(e) => (count > 0 ? setCount(count - 1) : null)}
      >
        -
      </span>
      <span className="meter-control-value">{count}</span>
      <span
        className="meter-control"
        onClick={(e) => (count < 15 ? setCount(count + 1) : null)}
      >
        +
      </span>
    </div>
  );
}
