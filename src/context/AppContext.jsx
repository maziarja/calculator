import { evaluate } from "mathjs";
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const initialValue = {
  theme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : 1,
  value: "",
};

function reducer(state, action) {
  try {
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
            .replace(/^0+/, "")
            .replace(/([*/\-+])[*/\-+]+/g, "$1"),
        };
      }
      case "deleteValue": {
        return {
          ...state,
          value: state.value.slice(0, state.value.length - 1),
        };
      }

      case "result": {
        return {
          ...state,
          value: evaluate(state.value),
        };
      }

      case "reset": {
        return {
          ...state,
          value: "",
        };
      }
      default:
        throw new Error("Unknown action");
    }
  } catch (err) {
    console.log(err);
    return { ...state, value: "Invalid Syntax" };
  }
}

function AppProvider({ children }) {
  const [{ theme, value }, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <AppContext.Provider value={{ theme, value, dispatch }}>
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
