import React, { useContext } from "react";
import Button from "./components/Button";
import { isValidInput } from "./assets/helper";
import { ContextAmount } from "./context";
import buttons from "./assets/buttons";
let singleKeys = ["-", "+", "*", "/", ".", ")", "(", "*", "^", "%"];
const App = () => {
  let { state, dispatch } = useContext(ContextAmount);

  const checkAndSetAmount = value => {
    if (isValidInput(value)) {
      dispatch({ type: "setAmount", amount: value });
    }
  };

  const handleOnchange = e => {
    let value = e.target.value;
    let lastDigitprev = state.amount
      .toString()
      .split("")
      .pop();

    let lastDigitnew = value
      .toString()
      .split("")
      .pop();

    if (
      singleKeys.includes(lastDigitnew) &&
      singleKeys.includes(lastDigitprev)
    ) {
      let last2ndDigit = state.amount
        .toString()
        .charAt(state.amount.length - 2);

      if (singleKeys.includes(last2ndDigit)) {
        return false;
      }
      if (lastDigitnew == lastDigitprev) {
        return false;
      }

      if (lastDigitnew != "-") {
        value = value.toString().slice(0, -2) + lastDigitnew;
      }
    }

    checkAndSetAmount(value);
  };

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      let value = e.target.value;
      dispatch({
        type: "setResult",
        expression: value
      });
    }
    if (e.keyCode == 8 || e.keyCode == 46) {
      e.preventDefault();
      dispatch({
        type: "clearSingle"
      });
    }
  };

  return (
    <div className="app">
      <div className="display">
        <div className="previous-exp">
          <span>{state.prevExpression}</span>
        </div>
        <textarea
          value={state.amount}
          onChange={handleOnchange}
          placeholder="0"
          className={state.hasError ? "display-text error" : "display-text"}
          onKeyDown={handleKeyPress}
        ></textarea>
      </div>

      <div className="button-panel">
        {buttons.map((item, index) => (
          <Button
            key={index}
            text={item.text}
            extraClass={item.class}
            value={item.value}
            single={item.single}
            action={item.action}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
