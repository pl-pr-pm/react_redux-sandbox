export const App = ({
  number,
  day,
  title,
  plus,
  minus,
  asyncMinus,
  getJson
}) => {
  return (
    <div>
      App{number} {day} {title}
      <button
        onClick={() => {
          plus(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          minus(10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          asyncMinus(10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          getJson();
        }}
      >
        GET
      </button>
    </div>
  );
};
