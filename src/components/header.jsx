
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavBar } from './nav-bar';



export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchForm(e) {
    e.preventDefault();
    const searchString = e.target.search.value;
    setSearchParams({ search: searchString });
  }

  return (
  <header className='w-full bg-black text-amber-100 ' >

          <form onSubmit={handleSearchForm} className="flex   justify-end items-center mr-3">
            <input
              type="search"
              name="search"
              placeholder="Procurar um nome"
              className="px-3 py-1 w-96 focus:outline-none mt-9 ml-2"

            />
          
         
          </form>
          <section>
            <NavBar/>
          </section>
  </header>
  );
};
