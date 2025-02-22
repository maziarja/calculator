import styled from "styled-components";
import Key from "../ui/Key";
import { useApp } from "../context/AppContext";

const StyledKeypad = styled.div`
  background-color: var(--bg-color-keypad);
  border-radius: 0.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem 2.5rem;

  @media (min-width: 31.25em) {
    gap: 2.5rem;
  }
`;

function Keypad() {
  const { value, dispatch } = useApp();

  function handleDotClick() {
    value
      .split(/[*/\-+]/)
      .map(
        (d) => !d.includes(".") && dispatch({ type: "setValue", payload: "." })
      );
  }
  return (
    <StyledKeypad>
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <Key
        onClick={() => {
          if (typeof value === "string") dispatch({ type: "deleteValue" });
        }}
        type="del"
      >
        DEL
      </Key>
      <Key>4</Key>
      <Key>5</Key>
      <Key>6</Key>
      <Key onClick={() => dispatch({ type: "sumValue" })}>+</Key>
      <Key>1</Key>
      <Key>2</Key>
      <Key>3</Key>
      <Key onClick={() => dispatch({ type: "subtractValue" })}>-</Key>
      <Key onClick={handleDotClick}>.</Key>
      <Key>0</Key>
      <Key onClick={() => dispatch({ type: "divideValue" })}>/</Key>
      <Key onClick={() => dispatch({ type: "multiplyValue" })}>x</Key>
      <Key onClick={() => dispatch({ type: "reset" })} type="reset">
        RESET
      </Key>
      <Key onClick={() => dispatch({ type: "result" })} type="equal">
        =
      </Key>
    </StyledKeypad>
  );
}

export default Keypad;
