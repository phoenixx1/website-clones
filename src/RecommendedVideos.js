import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>

      <div className="recommendedVideos__videos">
        <VideoCard
          title="What If You Poured Some Water On The Sun?"
          views="2.4M views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjSMOFuanBLRRh4TVYiXHXt-wS70tIK11ulePfw0Q=s48-c-k-c0x00ffffff-no-rj"
          channel="BRIGHT SIDE"
          image="https://i.ytimg.com/vi/0GOPAxEBDro/maxresdefault.jpg"
        />
        <VideoCard
          title="A Computer Science Career Path: Data Science"
          views="10K views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnh7I6mMngEXfmumdBh675wBMTbqGGEpdK52NGxoZQ=s48-c-k-c0x00ffffff-no-rj"
          channel="ForrestKnight"
          image="https://i.ytimg.com/vi/QCwS0XNgD3A/maxresdefault.jpg"
        />
        <VideoCard
          title="CSS Grid Tutorial | CSS Grid Crash Course"
          views="440K views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s48-c-k-c0x00ffffff-no-rj"
          channel="Dev Ed"
          image="https://i.ytimg.com/vi/EFafSYg-PkI/maxresdefault.jpg"
        />
        <VideoCard
          title="The Super Mario Effect - Tricking Your Brain into Learning More |Mark Rober | TEDxPenn"
          views="8.8M views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngdP3okXEWSNOV0jPGYSd7ulTVjYg3cJ3ENrvxU5w=s48-c-k-c0x00ffffff-no-rj"
          channel="TEDx Talks"
          image="https://2.bp.blogspot.com/-yyFEviQnsec/XH2e5MKek6I/AAAAAAAAjqw/-fzd-vnOHA0R_SFU8eQUMswD0hs3ETfpQCLcBGAs/w1200-h630-p-k-no-nu/Rober.png"
        />
        <VideoCard
          title="Exclusive Clip | Loki | Disney+"
          views="15  views"
          timestamp="2 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnhP8wdYpGS0H5ammJtkDGa7N73x84KG2s5PznPruGE=s48-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://i.ytimg.com/vi/G4JuopziR3Q/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
