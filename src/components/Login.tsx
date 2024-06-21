import React, { useState } from "react";

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <img
            src="/src/img/zextras-logo-vector 1.png" // Sostituisci con il percorso dell'immagine desiderata
            alt="Logo" // Aggiungi un testo alternativo per accessibilità
            className="mx-auto w-auto h-20 mb-4"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Username</h2>
        <input
          type="text"
          placeholder="Inserisci il tuo username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Password</h2>
        <input
          type="text"
          placeholder="Inserisci la tua password"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
