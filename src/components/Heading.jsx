import { useEffect } from "react";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import { NUM_OF_THEME } from "../config";

const StyledHeading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
  h1 {
    font-size: 3.2rem;
  }
  p {
    align-self: flex-end;
    font-size: 1.2rem;
    letter-spacing: 0.89px;
  }
  .theme-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  .theme-section {
    display: flex;
    flex-grow: 0;
    gap: 3rem;
  }
  .toggle-container {
    display: flex;
    align-items: center;
    width: 5.5rem;
    padding: 0.4rem 0.6rem;
    background-color: var(--bg-color-keypad);
    border-radius: 2rem;
  }
  .theme-numbers {
    display: flex;
    gap: 1.2rem;
    font-size: 1.2rem;
  }
`;

const Toggle = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 100%;
  background-color: var(--color-toggle);
  transform: translateX(${(props) => (props.theme - 1) * 100}%);
  transition: all 300ms;
  cursor: pointer;
`;

function Heading() {
  const { theme, dispatch } = useApp();

  function handleChangingTheme() {
    // 1) changing theme state
    dispatch({ type: "changingTheme" });
  }
  useEffect(() => {
    // 2) remove all the themes
    Array.from({ length: NUM_OF_THEME }, (_, i) => i + 1).map((num) =>
      document.documentElement.classList.remove(`theme${num}`)
    );
    // 3) adding theme class
    document.documentElement.classList.add(`theme${theme}`);
  }, [theme]);

  return (
    <StyledHeading>
      <h1>calc</h1>
      <section className="theme-section">
        <p>THEME</p>
        <div className="theme-container">
          <div className="theme-numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="toggle-container">
            <Toggle theme={theme} onClick={handleChangingTheme}></Toggle>
          </div>
        </div>
      </section>
    </StyledHeading>
  );
}

export default Heading;
