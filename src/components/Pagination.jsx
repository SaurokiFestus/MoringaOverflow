import React from 'react';

const Pagination = ({ quizsPerPage, totalQuizs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQuizs / quizsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-end container'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;