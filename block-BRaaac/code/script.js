let rootElm = document.querySelector('ul');
let input = document.querySelector('input');

let allMovies = JSON.parse(localStorage.getItem('movies')) || [];

function elm(type, attr = {}, ...children) {
  let element = document.createElement('type');
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

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
    let li = elm(
      'li',
      {},
      elm('span', {}, movie.name),
      elm(
        'button',
        { 'data-id': index },
        movie.isWatched ? 'To Watch' : 'Watch'
      )
    );
    btn.addEventListener('click', handleToggle);
    rootElm.append(li);
  });
}

createUI(allMovies, rootElm);

input.addEventListener('keyup', handleInput);
