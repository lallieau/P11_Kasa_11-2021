import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import lodgings from '../data.json';

console.log(lodgings)

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Gallery />
    </>
  );
}

export default App;
