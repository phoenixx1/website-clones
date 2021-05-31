import styled from "styled-components";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./api/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <AppContainer>
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <AppBody>
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">{/* <Chat /> */}</Route>
            </Switch>
          </Router>
        </AppBody>
      )}
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
