import React from "react";
import styled from "styled-components";
import Story from "./Story";

function StoryReel() {
  return (
    <StoryReelContainer>
      <Story
        image="https://pyxis.nymag.com/v1/imgs/8f8/e12/51b54d13d65d8ee3773ce32da03e1fa220-dogecoin.rsquare.w1200.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/44865935?s=400&u=bbaf3eb9e546a7c4869571947b2a214ff4705fd6&v=4"
        title="Nishant Saxena"
      />
      <Story
        image="https://editorial.fxstreet.com/images/Markets/Currencies/Cryptocurrencies/Coins/Cardano/cardano_1x1.jpg"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_MjVb3kYybNSPD6JZGN_6JeUrNeGGdArMvRXvw=s83-c-mo"
        title="Saxena Nishant"
      />
      <Story
        image="https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg"
        profileSrc="https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/articles_2014/4881842-low_res-sherlock.jpg?itok=N-wiKUtA"
        title="Phoenix"
      />
      <Story
        image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F908633080%2F960x0.jpg%3Ffit%3Dscale"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        title="Elon Musk"
      />
      <Story
        image="https://ak.picdn.net/shutterstock/videos/1011360299/thumb/1.jpg"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F605e22fe6df966b3fcbd3e15%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1080%26cropY1%3D0%26cropY2%3D1080"
        title="Jack Ma"
      />
    </StoryReelContainer>
  );
}

export default StoryReel;

const StoryReelContainer = styled.div`
  display: flex;
`;
