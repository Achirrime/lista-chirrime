import React from 'react';
import { PiInstagramLogoBold, PiLinkedinLogoBold, PiWhatsappLogoBold, PiXLogoBold } from 'react-icons/pi';

const Footer = () => {
    return (
      <footer className="bg-transparent text-black font-bold h-full flex justify-center items-center p-3 gap-5 border border-t-4">
        <div className=''><p>&copy; 2024.</p></div>
        <div className='flex space-x-4 justify-center items-center text-center '>
        <p className='text-black text-2xl'><PiXLogoBold/></p>
        <p className='text-cyan-800 text-2xl'><PiLinkedinLogoBold/></p>
        <p className='text-pink-600 text-2xl'><PiInstagramLogoBold/></p>
        <p className='text-lime-400 text-2xl'><PiWhatsappLogoBold/></p>
        </div>
      </footer>
  );
};

export default Footer;
