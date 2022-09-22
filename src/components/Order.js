const Order = ({ suya }) => {
  return (
    <div className='container order flex'>
      <h2>Thank you for Ordering 😎</h2>
      <p>You Ordered a "{suya.type} Suya" with:</p>
      {suya.toppings.map((topping) => (
        <p key={topping} className='order_para'>
          {topping}
        </p>
      ))}
    </div>
  );
};

export default Order;
