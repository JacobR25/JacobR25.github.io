import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kelly from './Kelly';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const kelly = ReactDOM.createRoot(document.getElementById('Kelly'));
kelly.render(
  <React.StrictMode>
    <Kelly />
    <form>
      <label for="rent">Rent: </label>
      <input type="text" id="rent" name="rent" /> <br></br>
      <label for="transportaion">Transportation: </label>
      <input type="text" id="transpormation" name="transportation" /> <br></br>
      <label for="food">Food: </label>
      <input type="text" id="food" name="food" /><br></br>
      <label for="utilities">Utilities: </label>
      <input type="text" id = "utilities" name="util" /><br></br>
      <label for="insurance">Insurance: </label>
      <input type="text" id = "insurance" name="insurance" /><br></br>
      <label for="savings">Savings: </label>
      <input type="text" id = "savings" name="savings" /><br></br>
      <label for="entertainment">Entertainment: </label>
      <input type="text" id="entertainment" name="entertainment" /><br></br>
      <label for="other">Other: </label>
      <input type="text" id="other" name="other" /><br></br>
      <input type="submit" value="Submit" /><br></br>
    </form>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
