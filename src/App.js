import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/cutom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
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
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      <SearchAutoComplete />
    </div>
  );
}

export default App;
