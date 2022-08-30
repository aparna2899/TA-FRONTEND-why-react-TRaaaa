import data from '../data.json';

function Articles() {
  return (
    <>
      <div className="container articles">
        {data.map((news) => (
          <Article info={news} />
        ))}
      </div>
      <hr></hr>
    </>
  );
}

function Article(props) {
  return (
    <div className="flex-30 card">
      <img src={props.info.urlToImage} alt="" />
      <h2>{props.info.title}</h2>
    </div>
  );
}

export default Articles;
