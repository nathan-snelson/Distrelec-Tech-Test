import React from 'react';
import Carousel from './components/carousel/Carousel';

// get test data
import data from './data.json';

function App() {
  return (
    <div>
      <Carousel data={data.carouselData} time={5000}/>      
    </div>
  );
}

export default App;