import data from '../colors.json';

function Color(props) {
  return (
    <div className="flex justify-space-between">
      <strong>{props.name}</strong>
      <ul className="flex">
        {props.allColors.map((color, index) => (
          <li>
            <div className="color-box" style={{ backgroundColor: color }}></div>
            <div className="flex justify-space-between">
              <span>{index === 0 ? 50 : index * 100}</span>
              <span>{color}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      {Object.keys(data).map((color) => (
        <Color name={color} allColors={data[color]} />
      ))}
    </>
  );
}

export default App;
