import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div>
      <div className='container'>
        <div className='image-container'>
          <img
            src='https://images.unsplash.com/photo-1527380992061-b126c88cbb41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80'
            alt=''
          />
        </div>
        <div className='content-container'>
          <h5>User Name</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin</p>
        </div>
        <button>View</button>
      </div>
    </div>
  );
};
export default Card;
