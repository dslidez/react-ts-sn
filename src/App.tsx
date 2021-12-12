import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU" />
      </header>
      <nav className="nav">
        <div>
          {" "}
          <a> Profile </a>{" "}
        </div>
        <div>
          <a> Messages </a>
        </div>
        <div>
          <a> News </a>
        </div>
        <div>
          <a> Music </a>
        </div>
        <div>
          <a> Settings </a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxsa6Bi3ZEuSNlEpOJv9nu_HRNqCKMUAoGxasmY1kuvbmIgKy6csAGQ2Hfolit1f4LQs&usqp=CAU" />
        </div>
        <div>ava+description</div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
