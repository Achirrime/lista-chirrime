import React, { useState } from "react";
import { Header } from "../components/header";
import Footer from "../components/footer";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados do formulário (substitua pela sua implementação)
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header />
      <main className="bg-slate-50">
        <h1 className="flex font-semibold text-2xl p-6 items-center justify-center">
          Como podemos ajudar hoje?
        </h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
             
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Digite seu nome"
              className="mt-1 p-2 block w-full border border-spacing-5 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              className="mt-1 p-2 block w-full border border-spacing-5 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
             
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              placeholder="Digite sua mensagem"
              className="mt-1 p-2 block w-full border border-spacing-5 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="flex items-center mb-4 mt-4 px-20 py-2 p-10 border border-transparent text-lg font-medium rounded-full text- bg-teal-300 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
