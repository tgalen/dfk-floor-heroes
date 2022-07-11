import { useState } from "react";

import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("Light");

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="accordian">
        <button type="button" class="category-btn">
          Category
        </button>
        <table className="category-table">
          <tr>
            <th>Price</th>
            <th>ID</th>
            <th>Chain</th>
          </tr>
          <tr>
            <td>5</td>
            <td>444444</td>
            <td>DFK</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
