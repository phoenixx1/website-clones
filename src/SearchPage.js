import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s88-c-k-c0x00ffffff-no-rj"
        channel="Unbox Therapy"
        verified
        subs="17.8M"
        noOfVideos={2000}
        description="Where products get naked.
        Here you will find a variety of videos showcasing the coolest products on the planet. From the newest smartphone to surprising gadgets and technology you never knew existed. It's all here on Unbox Therapy."
      />

      <hr />

      <VideoRow
        views="74M"
        subs="17.8M"
        description="Does the iPhone 6 Plus bend under pressure?"
        timestamp="6 years ago"
        channel="Unbox Therapy"
        title="iPhone 6 Plus Bend Test"
        image="https://9to5mac.com/wp-content/uploads/sites/6/2014/09/bendgatemaxresdefault.jpg?quality=82&strip=all&w=1600"
      />
      <VideoRow
        views="74M"
        subs="17.8M"
        description="Does the iPhone 6 Plus bend under pressure?"
        timestamp="6 years ago"
        channel="Unbox Therapy"
        title="iPhone 6 Plus Bend Test"
        image="https://9to5mac.com/wp-content/uploads/sites/6/2014/09/bendgatemaxresdefault.jpg?quality=82&strip=all&w=1600"
      />
      <VideoRow
        views="74M"
        subs="17.8M"
        description="Does the iPhone 6 Plus bend under pressure?"
        timestamp="6 years ago"
        channel="Unbox Therapy"
        title="iPhone 6 Plus Bend Test"
        image="https://9to5mac.com/wp-content/uploads/sites/6/2014/09/bendgatemaxresdefault.jpg?quality=82&strip=all&w=1600"
      />
      <VideoRow
        views="74M"
        subs="17.8M"
        description="Does the iPhone 6 Plus bend under pressure?"
        timestamp="6 years ago"
        channel="Unbox Therapy"
        title="iPhone 6 Plus Bend Test"
        image="https://9to5mac.com/wp-content/uploads/sites/6/2014/09/bendgatemaxresdefault.jpg?quality=82&strip=all&w=1600"
      />
      <VideoRow
        views="74M"
        subs="17.8M"
        description="Does the iPhone 6 Plus bend under pressure?"
        timestamp="6 years ago"
        channel="Unbox Therapy"
        title="iPhone 6 Plus Bend Test"
        image="https://9to5mac.com/wp-content/uploads/sites/6/2014/09/bendgatemaxresdefault.jpg?quality=82&strip=all&w=1600"
      />
    </div>
  );
}

export default SearchPage;
