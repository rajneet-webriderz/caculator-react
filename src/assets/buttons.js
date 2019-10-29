import { CLEAR_ALL, CLEAR_SINGLE, RESULT } from "./constant";

const json = [
  {
    text: "+",
    class: "action",
    value: "+",
    single: true
  },
  {
    text: "-",
    class: "action",
    value: "-",
    single: true
  },
  {
    text: "*",
    class: "action",
    value: "*",
    single: true
  },
  {
    text: "/",
    class: "action",
    value: "/",
    single: true
  },
  {
    text: "7",
    class: "",
    value: "7",
    single: false
  },
  {
    text: "8",
    class: "",
    value: "8",
    single: false
  },
  {
    text: "9",
    class: "",
    value: "9",
    single: false
  },
  {
    text: "C",
    class: "action2",
    value: "9",
    single: true,
    action: CLEAR_SINGLE
  },
  {
    text: "4",
    class: "",
    value: "4",
    single: false
  },
  {
    text: "5",
    class: "",
    value: "5",
    single: false
  },
  {
    text: "6",
    class: "",
    value: "6",
    single: false
  },
  {
    text: "AC",
    class: "action2",
    value: "9",
    single: true,
    action: CLEAR_ALL
  },
  {
    text: "1",
    class: "",
    value: "1",
    single: false
  },
  {
    text: "2",
    class: "",
    value: "2",
    single: false
  },
  {
    text: "3",
    class: "",
    value: "3",
    single: false
  },
  {
    text: "%",
    class: "action2",
    value: "%",
    single: true
  },
  {
    text: "0",
    class: "",
    value: "0",
    single: false
  },
  {
    text: ".",
    class: "action2",
    value: ".",
    single: true
  },
  {
    text: "=",
    class: "wide action",
    value: "",
    single: false,
    action: RESULT
  }
];

export default json;
