let rootElm = document.querySelector('ul');
let input = document.querySelector('input');

let allMovies = JSON.parse(localStorage.getItem('movies')) || [];

let elm = React.createElement;

function handleInput(event) {
  event.preventDefault();
  if (event.key === 'Enter') {
    let value = event.target.value;
    let movie = {
      name: value,
      isWatched: false,
    };
    allMovies.push(movie);
    createUI(allMovies, rootElm);
    event.target.value = '';
  }
  localStorage.setItem('movies', JSON.stringify(allMovies));
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  allMovies[id].isWatched = !allMovies[id].isWatched;
  localStorage.setItem('movies', JSON.stringify(allMovies));
  createUI(allMovies, rootElm);
}

function createUI(data, rootElm) {
  let ui = data.map((movie, index) => {
    let li = elm(
      'li',
      null,
      elm('span', null, movie.name),
      elm(
        'button',
        { 'data-id': index, onClick: handleToggle },
        movie.isWatched ? 'To Watch' : 'Watch'
      )
    );
    return li;
  });
  ReactDOM.render(ui, rootElm);
}

createUI(allMovies, rootElm);

input.addEventListener('keyup', handleInput);
