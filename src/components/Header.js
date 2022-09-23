import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className='header'
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
    >
      <div className='logo'>
        <h1>SP</h1>
      </div>
      <div className='header_nav'>
        <h1>Suya Place</h1>
      </div>
    </motion.header>
  );
};

export default Header;
