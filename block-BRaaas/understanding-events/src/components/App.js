import Class from '../components/Class';
import data from '../data';

function handleClick1() {
  alert(`Hello React Event`);
}

function handleClick2() {
  alert(`To learn React use https://reactjs.org`);
  alert(`React and ReactDOM works together`);
  alert(`Babel helps in writing JSX`);
}

function handleClick3(event) {
  return alert(`Hello ${event.target.innerText}`);
}

function handleClick4(event) {
  return alert(`${event.target.innerText}`);
}

function App() {
  return (
    <div className="container flex">
      <button onClick={handleClick1}>Click Me!</button>
      <button onClick={handleClick2}>How can I help you?</button>
      <div onClick={handleClick3}>
        <button>Arya</button>
        <button>John</button>
        <button>Bran</button>
      </div>
      <div onClick={Class}>
        <button>Arya</button>
        <button>John</button>
        <button>Bran</button>
      </div>
      <div onClick={handleClick4}>
        {data.map((fruit) => {
          return <button key={fruit.id}>{fruit.value}</button>;
        })}
      </div>
    </div>
  );
}

export default App;
