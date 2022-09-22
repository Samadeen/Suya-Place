import React from 'react';
import { Link } from 'react-router-dom';

const Base = ({ addType, suya }) => {
  const types = ['Classic', 'Aboki Special', 'Dried Hot', 'Soft Hot'];
  console.log(suya);

  return (
    <div className='container base flex'>
      <div>
        <h2>Step 1: Choose your type</h2>
        <ul>
          {types.map((type) => {
            const addTypeHandler = () => {
              addType(type);
            };
            let list = suya.type === type ? 'active' : '';
            return (
              <li key={type} onClick={addTypeHandler}>
                <span className={list}>{type}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {suya.type && (
        <div className='next'>
          <Link to='/toppings'>
            <button className='btn btn-next'>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
