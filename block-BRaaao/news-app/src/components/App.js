import Footer from './Footer';
import Header from './Header';
import Articles, { Article } from './Articles';
import Hero from './Hero';

function App(props) {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
