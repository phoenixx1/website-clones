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
import { useStateValue } from "../api/StateProvider";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <SidebarContainer>
      <SidebarRow title={user.displayName} src={user.photoURL} />
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
