import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const backdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const modal = {
  initial: { y: '-100vh', opacity: 0 },
  animate: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdrop}
          initial='initial'
          animate='animate'
          exit='hidden'
        >
          <motion.div className='modal' variants={modal}>
            <h2>Do you want to make another Suya while you wait?</h2>
            <Link to='/'>
              <button className='btn'>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
