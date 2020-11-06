import React, { useState, useEffect } from 'react'
import './TrackingBar.css'
// some websites that aided me in creating the tracking bar : https://medium.com/swlh/creating-an-animated-progress-bar-in-react-5e85e8f6ec16
// https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
export var TrackingBar = ({ width, percent }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);

  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
    </div>
  );
};
export default TrackingBar

