import styled from "styled-components";
import { useApp } from "../context/AppContext";

const StyledScreen = styled.form`
  display: grid;
  grid-template-columns: auto, 1fr;
  background-color: var(--bg-color-screen);
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  padding-block: 1rem;
  .calc {
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
  }
  p {
    font-size: 1.8rem;
    color: var(--color-heading);
    opacity: 0.6;
  }
`;
const Input = styled.input`
  text-align: right;
  width: 100%;
  padding-right: 2rem;
  background-color: inherit;
  font-family: inherit;
  border: none;
  color: var(--color-heading);
  font-size: 3.2rem;
  padding-block: 2rem;
  border-radius: 0.8rem;
`;

function Screen() {
  const { value, operator, lastValue } = useApp();

  return (
    <StyledScreen>
      <div className="calc">
        <p>{`${lastValue ? lastValue.toLocaleString() : ""}`}</p>
        <p>{`${lastValue ? operator : ""}`}</p>
        <p>{`${value ? value.toLocaleString() : ""}`}</p>
      </div>
      <Input
        type="text"
        value={value && !isNaN(value) ? Number(value).toLocaleString() : 0}
        disabled
      />
    </StyledScreen>
  );
}

export default Screen;
