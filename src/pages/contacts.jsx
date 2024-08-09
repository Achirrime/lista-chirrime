import React, { useState } from "react";
import { Header } from "../components/header";
import Footer from "../components/footer";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header />
      <main className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center mb-6">
          Como podemos ajudar hoje?
        </h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Digite seu nome"
              className="mt-1 p-2 block w-full border-2 border-black rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              className="mt-1 p-2 block w-full border-2 border-black rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              placeholder="Digite sua mensagem"
              className="mt-1 p-3 block w-full border-2 border-black rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 border-2 border-transparent text-lg font-medium rounded-full text-white bg-teal-300 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
