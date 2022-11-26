import React from "react";
import ReactDOM from "react-dom/client";
import "./css/styles.css";
import reportWebVitals from "./reportWebVitals";

const fName = "Reap3r";
const lName = "Chaos";
const luckyNum = 7;
const date = new Date();
// const hour = date.getHours();  // actual
const hour = 18; // testing

let headerText;
const headerStyle = {
  color: "",
};

if (hour < 12) {
  // Midnight to Noon
  headerText = "Good Morning";
  headerStyle.color = "red";
} else if (hour < 18) {
  // Noon to 6PM
  headerText = "Good Afternoon";
  headerStyle.color = "green";
} else {
  // 6PM to Midnight
  headerText = "Good Evening";
  headerStyle.color = "blue";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
    <p
      className="heading"
      style={headerStyle}
      spellCheck="false"
      contentEditable="true"
    >
      {headerText}
    </p>
    <p>Copyright {date.getFullYear()}.</p>
    <p>Current Time: {hour}</p>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
