import React from 'react'
import Filler from '../trackingbar/Filler'
import './TrackingBar.css'

const TrackingBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler/>
    </div>
  )
}
export default TrackingBar