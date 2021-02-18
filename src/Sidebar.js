import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  ExpandMoreOutlined,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title="Home" />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={Subscriptions} title="Subscription" />
      <hr />

      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your Videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpOutlined} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
    </div>
  );
}

export default Sidebar;
