import React from 'react';
import { useParams } from 'react-router-dom';
import { students } from '../data/students'; // Importe os dados de usuários
import { Header } from '../components/header';

export const StudentsDetails = () => {
  const { studentId } = useParams(); // Obtenha o parâmetro de URL para identificar o usuário

  // Encontre o usuário com base no linkLabel que corresponde ao username na URL

  const student = students.find(student => student.linkUrl === studentId);
  console.log(student)
  if (!student) {
    return (
      <>
        <Header />
        <main>
          <p>Estudante não encontrado</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <h1 className='text-2xl font-bold mb-4'>{student.linkLabel}</h1>
        <p><span>Email:</span>  bata@gmail.com {student.email}</p>
        <p><span>Idade:</span> 19 {student.idade}</p>
        <p><span>Moradia:</span> bota fogo {student.moradia}</p>
        <p><span>Biografia:  </span>trabalhar{student.descricao}</p>
      </main>
    </>
  );
};

export default StudentsDetails;