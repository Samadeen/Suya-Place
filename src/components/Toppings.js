import React from 'react';
import { Link } from 'react-router-dom';

const Toppings = ({ addToppings, suya }) => {
  const toppings = [
    'Onions',
    'Cabbage',
    'Ginger',
    'Garlic',
    'Spring onions',
    'Yagi',
    'Tomatoes',
  ];

  return (
    <div className='toppings container flex'>
      <div>
        <h2>What will like as toppings:</h2>
        {toppings.map((top) => {
          const addToppingsHandler = () => {
            addToppings(top);
          };

          let list = suya.toppings.includes(top) ? 'active' : '';
          return (
            <ul key={top} onClick={addToppingsHandler}>
              <li>
                <span className={list}>{top}</span>
              </li>
            </ul>
          );
        })}
      </div>
      <Link to='/order'>
        <button className='btn btn-next'>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
