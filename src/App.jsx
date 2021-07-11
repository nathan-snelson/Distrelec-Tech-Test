import React from 'react';
import Carousel from './components/carousel/Carousel';

import data from './data.json';

function App() {
  return (
    <div>
      <Carousel data={data.carouselData} />      
    </div>
  );
}

export default App;