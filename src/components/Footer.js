import React from 'react';
import technigoLogo from '../assets/logo.svg';

export const Footer = () => {
  return (
    <>
      <footer>
        <p>© 2020 Sofia Vaz Sousa - Foxes Group 1  <span role="img" aria-label="emoji">🦊</span></p>
        <p>
          <a href="https://www.linkedin.com/in/sofiavazsousa/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              |
          <a href="https://github.com/sofiavazs" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <img src={technigoLogo} alt="technigo logo" />
        <p>Project developed during the Technigo frontend development bootcamp</p>
      </footer>
    </>
  );
};