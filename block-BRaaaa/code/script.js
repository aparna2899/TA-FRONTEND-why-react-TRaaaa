let rootElm = document.querySelector('ul');
let input = document.querySelector('input');

let allMovies = JSON.parse(localStorage.getItem('movies')) || [];

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
  rootElm.innerHTML = '';
  data.forEach((movie, index) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = movie.name;
    let btn = document.createElement('button');
    if (movie.isWatched === true) {
      btn.innerText = 'To Watch';
    } else {
      btn.innerText = 'Watch';
    }
    btn.setAttribute('data-id', index);
    btn.addEventListener('click', handleToggle);
    li.append(span, btn);
    rootElm.append(li);
  });
}

createUI(allMovies, rootElm);

input.addEventListener('keyup', handleInput);
