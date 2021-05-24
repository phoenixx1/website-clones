import styled from "styled-components";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <AppContainer>
      <AppBody>
        <Sidebar />
      </AppBody>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #dadbd3;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  background-color: #ededed;
  margin-top: -50px;
  width: 90vw;
  height: 90vh;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;
