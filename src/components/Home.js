import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
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
const Home = () => {
  return (
    <motion.div
      className='home container flex'
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h2>Welcome to the Suya Place</h2>
      <Link to='./base'>
        <motion.button
          className='btn btn-primary'
          variants={buttonVariant}
          whileHover='hover'
        >
          Customize Your Suya
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
