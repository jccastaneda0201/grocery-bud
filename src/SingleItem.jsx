import { useState } from 'react';

const SingleItem = ({ item, removeItem, editItem }) => {
  //   ya no se necesita el useState const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-item">
      {/* <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /> */}
      <input type="checkbox" checked={item.completed} onChange={() => editItem(item.id)} />
      <p style={{ textTransform: 'capitalize', textDecoration: item.completed && 'line-through' }}>
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
