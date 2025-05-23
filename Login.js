import React, { useState } from "react";

const Login = ({ setUsername }) => {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim()) setUsername(name.trim());
  };

  return (
    <div className="login">
      <h2>Enter your name:</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleLogin}>Join Chat</button>
    </div>
  );
};

export default Login;
