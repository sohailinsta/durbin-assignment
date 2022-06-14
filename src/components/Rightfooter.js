import React from 'react'
import "./Rightfooter.css";
// import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
function Rightfooter() {
  return (
    <div className="main-right-footer">
        <div className="box-flex">
    <div className="first-circle">
        {/* <DeveloperBoardIcon className="developer-board"/> */}
        <img className="developer-board" src="https://cdn-icons-png.flaticon.com/512/2781/2781997.png" alt="dashboard"/>
    </div>
    <div className="arrow">
        ------------->
    </div>
    <div className="first-circle-one">
        <div className="text-lngest-cirlce">
            xlngest SDK
        </div>
    </div>

    </div>
    
    <div className="box-flex-two">
    <div className="first-circle-two">
        {/* <DeveloperBoardIcon className="developer-board-two"/> */}
        <img className="developer-board-two" src="https://cdn-icons-png.flaticon.com/512/1035/1035850.png" alt="dashboard"/>
    </div>
    <div className="arrow-two">
        ------------->
    </div>
    <div className="first-circle-one-two">
        <div className="text-lngest-cirlce-two">
            xlngest SDK
        </div>
    </div>
    </div>

    <div className="box-flex-three">
    <div className="first-circle">
        {/* <DeveloperBoardIcon className="developer-board"/> */}
        <img className="developer-board" src="https://cdn-icons-png.flaticon.com/512/2329/2329087.png" alt="dashboard"/>
    </div>
    <div className="arrow">
        ------------->
    </div>
    <div className="first-circle-one">
        <div className="text-lngest-cirlce">
            xlngest SDK
        </div>
    </div>

    </div>

    </div>
  )
}

export default Rightfooter