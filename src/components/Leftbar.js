import React from 'react'
import  "./Leftbar.css";
import AutoModeIcon from '@mui/icons-material/AutoMode';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import AttractionsIcon from '@mui/icons-material/Attractions';
function Leftbar() {
  return (
    <div className="main-left-bar">
     <div className="real-time-data">
    <AutoModeIcon className="real-time-logo"/>
    <div className="text-real-time">
        Real Time Data
    </div>
     </div>

     <div className="real-time-data-two">
    <CallToActionIcon className="real-time-logo"/>
    <div className="text-low-letency">
        Low-letency
    </div>
     </div>

     <div className="real-time-data-two">
    <AttractionsIcon className="real-time-logo"/>
    <div className="text-low-letency">
        end-to-end encrypted
    </div>
     </div>
     
    </div>
  )
}

export default Leftbar