"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push("/search");
      } else {
        setError("Wrong login details.");
      }
    } catch (error: unknown) {
      setError(`Something went wrong - try again: ${error}`);
    }
  };

  return (
    <div>
      <div>
        <h1>Login...</h1>
        <span className="blinky">DEMO&nbsp;/&nbsp;DEMO &nbsp; :)</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}