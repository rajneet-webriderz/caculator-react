import React, { useContext } from "react";
import { ContextAmount } from "../context";
import { isNumeric } from "../assets/helper";
import { RESULT, CLEAR_SINGLE, CLEAR_ALL } from "../assets/constant";

const Button = ({
  text,
  extraClass = "",
  value = "",
  action = "",
  single = false
}) => {
  let { state, dispatch } = useContext(ContextAmount);

  const handleValue = () => {
    let amount = state.amount;

    if (single && amount) {
      let lastDigit = amount
        .toString()
        .split("")
        .pop();

      if (lastDigit == value || !isNumeric(lastDigit)) return false;
    }

    if (value) {
      amount = state.amount.toString().concat(value);
      dispatch({ type: "setAmount", amount: amount });
    }
  };

  const handleAction = () => {
    switch (action) {
      case RESULT:
        dispatch({
          type: "setResult",
          expression: state.amount
        });
        break;
      case CLEAR_SINGLE:
        if (state.amount) {
          dispatch({
            type: "clearSingle"
          });
        }
        break;
      case CLEAR_ALL:
        if (state.amount) {
          dispatch({
            type: "clear_all"
          });
        }
        break;

      default:
        break;
    }
  };
  const handleClick = () => {
    if (action) {
      handleAction();
    } else if (value) {
      handleValue();
    }
  };

  return (
    <div className={"button-action " + extraClass} onClick={handleClick}>
      <button>{text}</button>
    </div>
  );
};
export default Button;
