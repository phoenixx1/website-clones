import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarRow
        title="Phoenix"
        src="https://avatars.githubusercontent.com/u/44865935?s=400&u=bbaf3eb9e546a7c4869571947b2a214ff4705fd6&v=4"
      />
      <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} />
      <SidebarRow title="Pages" Icon={EmojiFlags} />
      <SidebarRow title="Friends" Icon={People} />
      <SidebarRow title="Messenger" Icon={Chat} />
      <SidebarRow title="Marketplace" Icon={Storefront} />
      <SidebarRow title="Videos" Icon={VideoLibrary} />
      <SidebarRow title="More" Icon={ExpandMoreOutlined} />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  padding: 25px 10px;
  flex: 0.33;
`;
