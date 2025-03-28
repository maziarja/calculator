import styled from "styled-components";
import { useApp } from "../context/AppContext";

const StyledScreen = styled.form`
  display: grid;
  grid-template-columns: auto, 1fr;
  background-color: var(--bg-color-screen);
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  padding-block: 1rem;
`;
const Input = styled.input`
  text-align: right;
  width: 100%;
  padding-right: 2rem;
  background-color: var(--bg-color-screen);
  font-family: inherit;
  border: none;
  color: var(--color-heading);
  font-size: 3.2rem;
  padding-block: 2rem;
  border-radius: 0.8rem;
  &:disabled {
    opacity: 1;
    color: var(--color-heading);
    background-color: var(--bg-color-screen);
    -webkit-text-fill-color: var(--color-heading);
  }
`;

function Screen() {
  const { value } = useApp();

  return (
    <StyledScreen>
      <Input
        type="text"
        value={
          value !== ""
            ? String(value).replace(
                /\d+(?=\.\d+)|(?<!\.\d*)\b\d+\b/g,
                (match) => Number(match).toLocaleString()
              )
            : 0
        }
        disabled
      />
    </StyledScreen>
  );
}

export default Screen;
