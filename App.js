import React, { useState } from "react";
import Login from "./Login";
import Chat from "./Chat";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      {username ? <Chat username={username} /> : <Login setUsername={setUsername} />}
    </div>
  );
}

export default App;
