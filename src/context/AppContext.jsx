import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const initialValue = {
  theme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : 1,
  value: "",
  lastValue: "",
  operator: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changingTheme": {
      return {
        ...state,
        theme: state.theme >= 3 ? 1 : state.theme + 1,
      };
    }
    case "setValue": {
      return {
        ...state,
        value: (state.value + action.payload)
          .replace(/\.{2,}/, ".")
          .replace(/^0+/, ""),
      };
    }
    case "deleteValue": {
      return {
        ...state,
        value: state.value.slice(0, state.value.length - 1),
      };
    }
    case "sumValue": {
      return {
        ...state,
        operator: "+",
        lastValue: !state.lastValue ? state.value : state.lastValue,
        value: "",
      };
    }
    case "subtractValue": {
      return {
        ...state,
        operator: "-",
        lastValue:
          !state.lastValue && state.value !== "-"
            ? state.value
            : state.lastValue,
        value: "",
      };
    }
    case "divideValue": {
      return {
        ...state,
        operator: "/",
        lastValue: !state.lastValue ? state.value : state.lastValue,
        value: "",
      };
    }
    case "multiplyValue": {
      return {
        ...state,
        operator: "x",
        lastValue: !state.lastValue ? state.value : state.lastValue,
        value: "",
      };
    }

    case "result": {
      if (state.lastValue !== "") {
        let newValue;
        if (state.operator === "+")
          newValue = Number(state.lastValue) + Number(state.value);
        if (state.operator === "-")
          newValue = Number(state.lastValue) - Number(state.value);
        if (state.operator === "/")
          newValue = Number(state.lastValue) / Number(state.value);
        if (state.operator === "x")
          newValue = Number(state.lastValue) * Number(state.value);
        return {
          ...state,
          value: newValue,
          lastValue: "",
        };
      }
      return state;
    }

    case "reset": {
      return {
        ...state,
        value: "",
        lastValue: "",
        operator: "",
        result: "",
      };
    }
    default:
      throw new Error("Unknown action");
  }
}

function AppProvider({ children }) {
  const [{ theme, value, lastValue, operator }, dispatch] = useReducer(
    reducer,
    initialValue
  );
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <AppContext.Provider
      value={{ theme, value, lastValue, dispatch, operator }}
    >
      {children}
    </AppContext.Provider>
  );
}
function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of AppProvider");
  return context;
}

export { AppProvider, useApp };
