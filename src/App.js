import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Base from './components/Base';
import Header from './components/Header';
import Home from './components/Home';
import Order from './components/Order';
import Toppings from './components/Toppings';

function App() {
  const [suya, setSuya] = useState({ type: '', toppings: [] });

  const addType = (type) => {
    setSuya({ ...suya, type });
  };

  const addToppings = (topping) => {
    let newToppings;
    if (!suya.toppings.includes(topping)) {
      newToppings = [...suya.toppings, topping];
      console.log(newToppings);
    } else {
      newToppings = suya.toppings.filter((item) => item !== topping);
      console.log(newToppings);
    }
    setSuya({ ...suya, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/base' element={<Base addType={addType} suya={suya} />} />
        <Route
          path='/toppings'
          element={<Toppings addToppings={addToppings} suya={suya} />}
        />
        <Route path='/order' element={<Order suya={suya} />} />
      </Routes>
    </>
  );
}

export default App;
