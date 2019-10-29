import * as React from "react";
import { evaluate } from "mathjs";

let ContextAmount = React.createContext();

let initialState = {
  amount: 0,
  prevExpression: "",
  hasError: false
};

let reducer = (state, action) => {
  switch (action.type) {
    case "clear_all":
      return initialState;

    case "setAmount":
      let value = action.amount
        ? action.amount.toString().replace(/^0+/, "")
        : 0;
      return { ...state, amount: value };

    case "clearSingle":
      let amount = state.amount.toString().slice(0, -1);
      return { ...state, amount: amount };

    case "setResult":
      let expression = action.expression;
      try {
        let result = evaluate(expression);
        if (result == "Infinity") {
          return { ...state, hasError: true };
        } else {
          return {
            ...state,
            amount: result,
            prevExpression: expression,
            hasError: false
          };
        }
      } catch (error) {
        return { ...state, hasError: true };
      }

    default:
      return initialState;
  }
};

function ContextAmountProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);

  let value = { state, dispatch };

  return (
    <ContextAmount.Provider value={value}>
      {props.children}
    </ContextAmount.Provider>
  );
}

let ContextAmountConsumer = ContextAmount.Consumer;

export { ContextAmount, ContextAmountProvider, ContextAmountConsumer };
