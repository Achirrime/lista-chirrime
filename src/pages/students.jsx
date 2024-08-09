import React, { useState, useRef } from 'react';
import { students as initialStudents } from '../data/students';
import { Header } from '../components/header';
import Footer from '../components/footer';
import { Plus, Trash } from '@phosphor-icons/react';
import { v4 as uuidv4 } from 'uuid';

// Função para gerar URL de imagem com base no nome
const generateAvatarUrl = (name) => {
  // Usando Random User Generator para obter fotos reais
  return `https://randomuser.me/api/portraits/med/men/${Math.floor(Math.random() * 100)}.jpg`;
};

export const Students = () => {
  const [students, setStudents] = useState(initialStudents);
  const [searchString, setSearchString] = useState('');
  const [newStudent, setNewStudent] = useState({
    linkLabel: '',
    email: '',
    idade: '',
    genero: '',
    descricao: '',
    linkUrl: '',
  });
  const [expandedStudentId, setExpandedStudentId] = useState(null);

  const formRef = useRef(null); // Ref para o formulário de adicionar estudante

  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleAddStudent = (event) => {
    event.preventDefault();
    if (newStudent.linkLabel && newStudent.email) {
      setStudents([
        ...students,
        {
          ...newStudent,
          id: uuidv4(), // Generate a unique ID
        },
      ]);
      setNewStudent({
        linkLabel: '',
        email: '',
        idade: '',
        genero: '',
        descricao: '',
        linkUrl: '',
      });
    }
  };

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const handleToggleExpand = (studentId) => {
    setExpandedStudentId(expandedStudentId === studentId ? null : studentId);
  };

  const filteredStudents = students.filter(student => {
    return (
      student.linkLabel.toLowerCase().includes(searchString.toLowerCase()) ||
      student.idade.toString().includes(searchString) ||
      student.genero.toLowerCase().includes(searchString.toLowerCase())
    );
  });

  // Função para rolar para o formulário
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="p-6 bg-transparent relative">

        {/* Ícone de Adicionar Novo Estudante */}
        <button
          onClick={scrollToForm}
          className="fixed top-4 left-4 bg-blue-500 text-white flex items-center gap-2 p-2 rounded-full shadow-lg"
        >
          <Plus size={24} />
          <span>Novo</span>
        </button>

        {/* Barra de Pesquisa */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Pesquisar por nome, idade, gênero..."
            value={searchString}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded w-full sm:w-80"
          />
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <div className="mx-auto max-w-3xl">
            <table className="table-auto w-full bg-blue-950 text-white">
              
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student.id} className="bg-blue-400 border-b border-blue-300">
                    <td className="p-2 text-center">{index + 1}</td>
                    <td className="p-2">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={generateAvatarUrl(student.linkLabel)}
                            alt={student.linkLabel}
                            onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div
                        className="font-bold cursor-pointer"
                        onClick={() => handleToggleExpand(student.id)}
                      >
                        {student.linkLabel}
                      </div>
                    </td>
                    <td colSpan="2">
                      {expandedStudentId === student.id && (
                        <div className="p-2 border-t border-blue-300 bg-blue-200 text-blue-900">
                          <p><strong>Email:</strong> {student.email}</p>
                          <p><strong>Idade:</strong> {student.idade}</p>
                          <p><strong>Gênero:</strong> {student.genero}</p>
                          <p><strong>Descrição:</strong> {student.descricao}</p>
                        </div>
                      )}
                    </td>
                    <td className="p-2 text-center">
                      <button
                        className="btn btn-ghost btn-xs text-white"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Formulário para Adicionar Novo Estudante */}
        <form ref={formRef} onSubmit={handleAddStudent} className="mt-6 mx-auto max-w-lg p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold mb-4">Adicionar Novo Estudante</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Nome"
              value={newStudent.linkLabel}
              onChange={(e) => setNewStudent({ ...newStudent, linkLabel: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Idade"
              value={newStudent.idade}
              onChange={(e) => setNewStudent({ ...newStudent, idade: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Gênero"
              value={newStudent.genero}
              onChange={(e) => setNewStudent({ ...newStudent, genero: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <textarea
              placeholder="Descrição"
              value={newStudent.descricao}
              onChange={(e) => setNewStudent({ ...newStudent, descricao: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Adicionar</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Students;
