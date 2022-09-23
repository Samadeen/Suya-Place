import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Base = ({ addType, suya }) => {
  const types = ['Classic', 'Aboki Special', 'Dried Hot', 'Soft Hot'];
  console.log(suya);

  return (
    <motion.div
      className='container base flex'
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div>
        <h2>Step 1: Choose your type:</h2>
        <ul>
          {types.map((type) => {
            const addTypeHandler = () => {
              addType(type);
            };
            let list = suya.type === type ? 'active' : '';
            return (
              <motion.li
                key={type}
                onClick={addTypeHandler}
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                  color: '#cb0000c3',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={list}>{type}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
      {suya.type && (
        <motion.div className='next' variants={nextVariant}>
          <Link to='/toppings'>
            <motion.button
              className='btn btn-next'
              variants={buttonVariant}
              whileHover='hover'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
