import styled from "styled-components";
import Heading from "./components/Heading";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";

const StyledApp = styled.div`
  background-color: var(--bg-color-body);
  min-height: 100dvh;
  display: flex;
  align-items: center;

  & > div {
    max-width: 58rem;
    width: 90%;
    margin-inline: auto;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.05);
  }
`;
function App() {
  return (
    <StyledApp>
      <div>
        <Heading />
        <Screen />
        <Keypad />
      </div>
    </StyledApp>
  );
}

export default App;
