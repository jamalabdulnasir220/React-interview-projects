import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import Appp from "./components/website";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <Appp /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={1}
      /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
