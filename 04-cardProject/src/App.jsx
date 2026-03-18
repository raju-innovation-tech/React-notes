import React from 'react'
import flipcart from "./assets/flipcart.png";
import bigbasket from "./assets/big.png";
import blinkit from "./assets/blinkit.png";
import swiggy from "./assets/swiggy.png";

import Ca from './components/Card'

const App = () => {
  return (
    <div className="parent">
      
      <Ca company="Amazon" img="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg" />
      <Ca company="Flipcarts" img={flipcart} />
      <Ca company="Big-Basket" img={bigbasket} />
      <Ca company="Blinket" img={blinkit} />
      <Ca company="Swiggy" img={swiggy} />
      
                     
    </div>
  )
}

export default App
