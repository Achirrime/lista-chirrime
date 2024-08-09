import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBar } from './nav-bar';
import { Graph } from '@phosphor-icons/react';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleSearchForm(e) {
    e.preventDefault();
    const searchString = e.target.search.value;
    setSearchParams({ search: searchString });
  }

  const handleIconClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="w-full bg-transparent text-cyan-400 relative flex items-center justify-between p-4">
      <Graph 
        size={29} 
        onClick={handleIconClick} 
        className="cursor-pointer" 
      />
      
      <section className="ml-auto">
        <NavBar />
      </section>
    </header>
  );
};
