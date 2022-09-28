import { motion } from 'framer-motion';
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

  const containerVariant = {
    initial: {
      opacity: 0,
      x: '100vw',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, type: 'spring' },
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' },
    },
  };

  const nextVariant = {
    initial: {
      x: '-100vw',
    },
    animate: {
      x: 0,
      transition: { ease: 'easeInOut', type: 'spring', stiffness: 120 },
    },
  };

  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: '0 6px 6px rgba(0, 0, 0, 0.3)',
      boxShadow: '0 6px 6px rgba(0, 0, 0, 0.3)',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      className='toppings container flex'
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div>
        <h2>What will like as toppings:</h2>
        {toppings.map((top) => {
          const addToppingsHandler = () => {
            addToppings(top);
          };

          let list = suya.toppings.includes(top) ? 'active' : '';
          return (
            <ul>
              <motion.li
                key={top}
                onClick={addToppingsHandler}
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                  color: '#cb0000c3',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={list}>{top}</span>
              </motion.li>
            </ul>
          );
        })}
      </div>
      <motion.div className='' variants={nextVariant}>
        <Link to='/order'>
          <motion.button
            className='btn btn-next'
            variants={buttonVariant}
            whileHover='hover'
          >
            Order
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Toppings;
