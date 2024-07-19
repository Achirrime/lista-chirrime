import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [linkLabel, setLinkLabel] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [moradia, setMoradia] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      linkUrl: /users/${encodeURIComponent(linkLabel.toLowerCase())}, // Gera o linkUrl com base no linkLabel
      linkLabel,
      email,
      idade: parseInt(idade),
      moradia,
      descricao
    };
    onAddStudent(newStudent);
    // Limpa os campos do formulário após adicionar o usuário
    setLinkLabel('');
    setEmail('');
    setIdade('');
    setMoradia('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Estudante"
        value={linkLabel}
        onChange={(e) => setLinkLabel(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Moradia"
        value={moradia}
        onChange={(e) => setMoradia(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <button type="submit">Adicionar Usuário</button>
    </form>
  );
};

export default AddStudentForm;