import { useState } from 'react';
import Form from './Form';
import Items from './Items';
import { nanoid } from 'nanoid';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} />
    </section>
  );
};

export default App;
