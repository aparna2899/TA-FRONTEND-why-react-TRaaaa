import PropTypes from 'prop-types';
import data from '../data.json';

function Articles() {
  return (
    <>
      <div className="container articles">
        {data.map((news) => (
          <Article {...news} />
        ))}
      </div>
      <hr></hr>
    </>
  );
}

function Article(props) {
  return (
    <div className="flex-30 card">
      <img src={props.urlToImage} alt="" />
      <h2>{props.title}</h2>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};

export default Articles;
