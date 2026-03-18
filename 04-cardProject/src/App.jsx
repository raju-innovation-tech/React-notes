import React from 'react'
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg" alt="" />
          <button>save <Bookmark size={12} /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>2 Day ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hrs</h3>
             <p>Noida,India</p>
          </div>
          <button>Apply Now</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
