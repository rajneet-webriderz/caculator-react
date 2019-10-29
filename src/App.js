import React, { useContext } from "react";
import Button from "./components/Button";
import { CLEAR_SINGLE, CLEAR_ALL, RESULT } from "./assets/constant";
import { isValidInput } from "./assets/helper";
import { ContextAmount } from "./context";

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
        <Button text="+" extraClass="action" value="+" single={true} />
        <Button text="-" extraClass="action" value="-" single={true} />
        <Button text="*" extraClass="action" value="*" single={true} />
        <Button text="/" extraClass="action" value="/" single={true} />
        <Button text="7" value="7" />
        <Button text="8" value="8" />
        <Button text="9" value="9" />
        <Button text="C" extraClass="action2" action={CLEAR_SINGLE} />
        <Button text="4" value="4" />
        <Button text="5" value="5" />
        <Button text="6" value="6" />
        <Button text="AC" extraClass="action2" action={CLEAR_ALL} />
        <Button text="1" value="1" />
        <Button text="2" value="2" />
        <Button text="3" value="3" />
        <Button text="%" extraClass="action2" value="%" single={true} />
        <Button text="0" value="0" />
        <Button text="." extraClass="action2" value="." single={true} />
        <Button text="=" extraClass="wide action" action={RESULT} />
      </div>
    </div>
  );
};

export default App;
