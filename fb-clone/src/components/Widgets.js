import React from "react";
import styled from "styled-components";

function Widgets() {
  return (
    <WidgetsContainer>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcryptocurrency&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </WidgetsContainer>
  );
}

export default Widgets;

const WidgetsContainer = styled.div``;
