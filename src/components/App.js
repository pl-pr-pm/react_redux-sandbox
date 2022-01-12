export const App = ({ number, day, title, plus, minus }) => {
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
    </div>
  );
};
