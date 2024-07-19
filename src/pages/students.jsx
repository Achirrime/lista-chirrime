import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { students } from '../data//students';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';


export const Students = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  function getFilteredStudents() {
    const searchString = searchParams.get('search');
    if (!searchString || searchString === '') {
      return students;
    } else {
      return users.filter((student) =>
        user.linkLabel.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }
  const addStudent = (studentData) => {
    // Implement logic to add a new student
    console.log("Adding student:", studentData);
  };

  const deleteStudent = (studentId) => {
    // Implement logic to delete a student
    console.log("Deleting student with ID:", studentId);
  };
  const studentRows = students.reduce((rows, student, index) => {
    const rowIndex = Math.floor(index / 4); // Calculate row index based on student position
    if (!rows[rowIndex]) {
      rows[rowIndex] = []; // Create a new row array if it doesn't exist
    }
    rows[rowIndex].push(student); // Add student to the current row
    return rows;
  }, []);


  return (
    <>
       <Header />
      <main className="p-6 bg-orange-50">
        <h1 className="text-2xl font-bold mb-6 text-center">LISTA DE ESTUDANTES</h1>
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
              </div>
              
                {student.descricao}
                <Link
                      to={`/students/${encodeURIComponent(student.linkUrl.toLowerCase())}`}
                      className="block mt-2 text-blue-500 hover:underline"
                    >
                      {student.descricao}
                      <div>
                        <button
                          className=" text-white px-3 py-1 rounded"
                          onClick={() => addStudent(student)} // Pass student object
                        >
                          <FaPlusCircle className='text-green-400 '/>
                        </button>
                        <button
                          className=" text-white px-3 py-1 rounded"
                          onClick={() => deleteStudent(student.id)} // Pass student ID
                        >
                          <FaTrash className='text-red-700 '/>
                        </button>
                      </div>
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer/>
    </>
  );
};