
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-button';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accoridan Component */}
      {/* <Accordian /> */}
      
      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
    
      {/* Load More Products Component */}
      <LoadMoreData />
    </div>
  );
}

export default App;
