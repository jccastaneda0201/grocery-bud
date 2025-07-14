import { useState } from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItemName);
  };
  const [newItemName, setNewItemName] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
