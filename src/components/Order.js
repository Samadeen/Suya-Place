import { motion } from 'framer-motion';
import { useEffect } from 'react';

const containerVariant = {
  initial: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.4,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      mass: 0.5,
      type: 'spring',
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Order = ({ suya, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => setShowModal(true), 6000);
  }, [setShowModal]);

  return (
    <motion.div
      className='container order flex'
      variants={containerVariant}
      initial='initial'
      animate='animate'
    >
      <h2>Thank you for Ordering 😎</h2>
      <motion.p variants={childVariants}>
        You Ordered a "{suya.type} Suya" with:
      </motion.p>
      {suya.toppings.map((topping) => (
        <motion.p variants={childVariants} key={topping} className='order_para'>
          {topping}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default Order;
