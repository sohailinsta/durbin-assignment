import React from 'react'
import "./Rightbar.css";
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
function Rightbar() {
  return (
    <div className="main-right-bar">
    <div className="real-time-data-three">
    <InsightsIcon className="real-time-logo-three"/>
    <div className="text-real-time-three">
        Real Time Data
    </div>
     </div>

     <div className="real-time-data-four">
    <SettingsIcon className="real-time-logo-three"/>
    <div className="text-real-time-three">
    OTA Update availabe
    </div>
     </div>

     <div className="real-time-data-four">
    <RepeatOneOnIcon className="real-time-logo-three"/>
    <div className="text-real-time-three">
        Advanced integrations
    </div>
     </div>


    </div>
  )
}

export default Rightbar;