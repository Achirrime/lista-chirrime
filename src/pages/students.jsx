import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { students as initialStudents } from '../data/students';
import { Header } from '../components/header';
import Footer from '../components/footer';
import { Plus, Trash } from '@phosphor-icons/react';
import { v4 as uuidv4 } from 'uuid';

const generateAvatarUrl = (name) => {
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

  const formRef = useRef(null); 
  const navigate = useNavigate();

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
          id: uuidv4(), 
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

  useEffect(() => {
    if (searchString && filteredStudents.length === 0) {
      navigate('/error'); 
    }
  }, [searchString, filteredStudents, navigate]);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="p-6 bg-transparent relative">
        <button
          onClick={scrollToForm}
          className="fixed top-16 left-4 bg-blue-500 text-white flex items-center gap-2 p-2 rounded-full shadow-lg"
          style={{ zIndex: 10 }} 
        >
          <Plus size={24} />
          <span>Novo</span>
        </button>

        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Pesquisar por nome, idade, gênero"
            value={searchString}
            onChange={handleSearchChange}
            className="p-1 border border-black rounded-lg w-full sm:w-96"
          />
        </div>

        <div className="overflow-x-auto">
          <div className="mx-auto max-w-3xl">
            <table className="table-auto w-full text-black bg-bg-green-150">
              <tbody>
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-red-500">
                      Nenhum resultado encontrado
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student, index) => (
                    <tr key={student.id} className="bg-bg-green-150 border-b border-teal-500">
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
                          <div className="p-2 border-t border-green-300 bg-green-100 text-green-900">
                            <p><strong>Email:</strong> {student.email}</p>
                            <p><strong>Idade:</strong> {student.idade}</p>
                            <p><strong>Gênero:</strong> {student.genero}</p>
                            <p><strong>Descrição:</strong> {student.descricao}</p>
                          </div>
                        )}
                      </td>
                      <td className="p-2 text-center">
                        <button
                          className="btn btn-ghost btn-xs text-red-700"
                          onClick={() => handleDeleteStudent(student.id)}
                        >
                          <Trash size={25} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleAddStudent} className="mt-6 mx-auto max-w-lg p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold mb-4"></h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Nome"
              value={newStudent.linkLabel}
              onChange={(e) => setNewStudent({ ...newStudent, linkLabel: e.target.value })}
              className="p-2 border border-black rounded-xl w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              className="p-2 border border-black rounded-xl w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Idade"
              value={newStudent.idade}
              onChange={(e) => setNewStudent({ ...newStudent, idade: e.target.value })}
              className="p-2 border border-black rounded-xl w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Gênero"
              value={newStudent.genero}
              onChange={(e) => setNewStudent({ ...newStudent, genero: e.target.value })}
              className="p-2 border border-black rounded-xl w-full"
            />
          </div>
          <div className="mb-2">
            <textarea
              placeholder="Descrição"
              value={newStudent.descricao}
              onChange={(e) => setNewStudent({ ...newStudent, descricao: e.target.value })}
              className="p-2 border border-black rounded-xl w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-2xl">
            <Plus size={25}/>
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Students;
