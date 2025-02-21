import styled, { css } from "styled-components";
import { useApp } from "../context/AppContext";
import { useEffect, useRef } from "react";

const StyledKey = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-key);
  padding-block: 1.1rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 0 var(--color-shadow-key);
  cursor: pointer;
  transition: all 100ms ease;

  &:active {
    box-shadow: 0px 2px 3px var(--color-shadow-key);
    transform: translateY(2px);
    background-color: var(--bg-color-key-active);
    ${(props) =>
      (props.type === "reset" || props.type === "del") &&
      css`
        box-shadow: 0px 2px 3px var(--color-shadow-del-reset);
        background-color: var(--bg-color-del-reset-active);
      `}
    ${(props) =>
      props.type === "equal" &&
      css`
        box-shadow: 0px 2px 3px var(--color-shadow-equal);
        background-color: var(--bg-color-equal-active);
      `};
  }

  ${(props) =>
    (props.type === "del" || props.type === "reset") &&
    css`
      background-color: var(--bg-color-del-reset);
      box-shadow: 0 5px 0 var(--color-shadow-del-reset);
    `}

  ${(props) =>
    props.type === "reset" &&
    css`
      grid-column: 1/3;
    `}

    ${(props) =>
    props.type === "equal" &&
    css`
      grid-column: 3/5;
      background-color: var(--bg-color-equal);
      box-shadow: 0 5px 0 var(--color-shadow-equal);
    `}

  p {
    font-size: 3.2rem;
    color: var(--color-key);
    margin-top: 0.5rem;

    ${(props) =>
      (props.type === "del" || props.type === "reset") &&
      css`
        font-size: 1.9rem;
        color: var(--color-del-reset);
      `}
    ${(props) =>
      props.type === "equal" &&
      css`
        color: var(--color-equal);
        font-size: 1.9rem;
      `}
  }
`;

function Key({ type, children, onClick }) {
  const { dispatch, value } = useApp();
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    window.addEventListener("keydown", (e) => {
      if (children === e.key && !isNaN(Number(children))) {
        dispatch({
          type: "setValue",
          payload: e.key,
        });
      }
      if (e.key === "+" || e.key === "=") dispatch({ type: "sumValue" });
      if (e.key === "-") dispatch({ type: "subtractValue" });
      if (e.key === "*") dispatch({ type: "multiplyValue" });
      if (e.key === "/") dispatch({ type: "divideValue" });
      if (e.key === "Enter") dispatch({ type: "result" });
      if (e.key === "Escape") dispatch({ type: "reset" });
    });
    ref.current = true;
  }, [children, dispatch]);

  return (
    <StyledKey
      onClick={() => {
        (value === "" && children === "-") || !isNaN(Number(children))
          ? dispatch({
              type: "setValue",
              payload: children,
            })
          : onClick();
      }}
      type={type}
    >
      <p>{children}</p>
    </StyledKey>
  );
}

export default Key;
