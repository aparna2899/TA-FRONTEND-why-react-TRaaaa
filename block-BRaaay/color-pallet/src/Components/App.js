import data from '../colors.json';

function Color(props) {
  return (
    <div>
      <div className="color-box" style={{ backgroundColor: props.shade }}></div>
      <span>{props.shade}</span>
    </div>
  );
}

function App() {
  return (
    <div className="flex">
      {data.grape.map((color) => (
        <Color key={color} shade={color} />
      ))}
    </div>
  );
}

export default App;
