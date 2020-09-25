import React from "react";
import "./styles.css";

function HeaderBox() {
  return (
    <header>
      <nav>
        <div className="inner">
          <h1>안녕하세요</h1>
          <h2>반가워요</h2>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="App">
      <HeaderBox />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
