import React from "react";
import "./CSS/header.css";
import "./CSS/sidebar.css"
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import { CloudQueueOutlined } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_btn">
        <button >
          <img src="https://wellesleyps.org/technology/wp-content/uploads/sites/21/2018/05/Screen-Shot-2018-05-21-at-9.30.30-AM-355x350.png" alt="" />
          <span>New</span>
        </button>
      </div>
      <div className="sidebar_options">
        <div className="sidebar_option sidebar_option-Active">
          <MobileScreenShareIcon />
          <span><b>My Drive</b></span>
        </div>
        <div className="sidebar_option">
          <DevicesIcon />
          <span>Computers</span>
        </div>
        <div className="sidebar_option">
          <PeopleOutlineIcon />
          <span>Shared with Me</span>
        </div>
        <div className="sidebar_option">
          <QueryBuilderOutlinedIcon />
          <span>Recent</span>
          </div>
          <div className="sidebar_option">
            <StarBorderOutlinedIcon />
            <span>Starred</span>
            </div>
            <div className="sidebar_option">
              <DeleteOutlineOutlinedIcon />
              <span>Trash</span>
            
          
        </div>
      </div>
      <hr />

      <div className="sidebar_options">
        <div className="sidebar_option">
          <CloudQueueOutlined/>
          <span>Storage</span>
            </div>
          <div className="progress_bar">
            <progress   size="tiny" value="50" max="100"/>
            <span>6.45 of 15 GB Used</span>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
