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

    if (singleKeys.includes(lastDigitnew) && lastDigitnew == lastDigitprev) {
      return false;
    }
    if (
      singleKeys.includes(lastDigitprev) &&
      singleKeys.includes(lastDigitnew)
    ) {
      return false;
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
  };

  return (
    <div className="app">
      <div className="display">
        <textarea
          value={state.amount}
          onChange={handleOnchange}
          placeholder="0"
          className={state.hasError ? "display-text error" : "display-text"}
          onKeyDown={handleKeyPress}
        ></textarea>

        <div className="previous-exp">
          <span>{state.prevExpression}</span>
        </div>
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
