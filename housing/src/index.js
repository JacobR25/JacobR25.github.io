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
      <label>
        Rent:
        <input type="text" name="rent" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <form>
      <label>
        Transportation:
        <input type="text" name="transportation" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <form>
      <label>
        Food:
        <input type="text" name="food" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <form>
      <label>
        Utilities:
        <input type="text" name="util" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <form>
      <label>
        Insurance:
        <input type="text" name="insurance" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <form>
      <label>
        Savings:
        <input type="text" name="savings" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <form>
      <label>
        Entertainment:
        <input type="text" name="entertainment" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <form>
      <label>
        Other:
        <input type="text" name="other" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
