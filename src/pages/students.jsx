import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { students as initialStudents } from '../data/students';
import { Header } from '../components/header';
import Footer from '../components/footer';
import { Trash } from '@phosphor-icons/react';

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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

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
          id: Date.now(), 
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

  const filteredStudents = students.filter(student => {
    return (
      student.linkLabel.toLowerCase().includes(searchString.toLowerCase()) ||
      student.idade.toString().includes(searchString) ||
      student.genero.toLowerCase().includes(searchString.toLowerCase())
    );
  });

  const studentRows = filteredStudents.reduce((rows, student, index) => {
    const rowIndex = Math.floor(index / 4);
    if (!rows[rowIndex]) {
      rows[rowIndex] = [];
    }
    rows[rowIndex].push(student);
    return rows;
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 bg-slate-50">
        <h1 className="text-2xl font-bold mb-6 text-center">LISTA DE ESTUDANTES</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Pesquisar por nome, idade, gênero..."
            value={searchString}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <table className="w-full table-fixed border border-spacing-5">
          <tbody>
            {studentRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-spacing-5 border-stone-50">
                {row.map((student, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} className="p-1 border-solid border-stone-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">{student.linkLabel}</p>
                        <p className="text-gray-600">{student.email}</p>
                      </div>
                      <div>
                        <Link
                          to={`/students/${encodeURIComponent(student.linkUrl.toLowerCase())}`}
                          className="block mt-2 text-blue-500 hover:underline"
                        >
                          {student.descricao}
                        </Link>
                        <button
                          className="text-white px-3 py-1 rounded bg-red-700 hover:bg-red-800 ml-2"
                          onClick={() => handleDeleteStudent(student.id)}
                        >
                          <Trash />
                        </button>
                      </div>
                    </div>
                    <p>{student.descricao}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={handleAddStudent} className="mt-6">
          <h2 className="text-xl font-bold mb-4">Novo Estudante</h2>
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
