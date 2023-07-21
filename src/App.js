import React, { useState } from 'react';

const App = () => {
  const sampleData = [
    // Your sample data here...
  ];

  const [menuData, setMenuData] = useState(sampleData);

  const handlePriceUpdate = (id, price) => {
    const updatedMenuData = menuData.map(item => {
      if (item.id === id) {
        return { ...item, price: parseFloat(price) };
      }
      return item;
    });
    setMenuData(updatedMenuData);
  };

  const handleSave = () => {
    // For this frontend-only implementation, we do not need to save the data to the backend.
    // The updated data is already stored in the state.
    console.log("Updated menu data:", menuData);
  };

  return (
    <div>
      <table style={{ border: 'solid 1px black' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Category</th>
            <th>Label</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {menuData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><img src={item.image} alt="Menu Item" style={{ width: '100px' }} /></td>
              <td>{item.category}</td>
              <td>{item.label}</td>
              <td><input type="number" value={item.price} onChange={(e) => handlePriceUpdate(item.id, e.target.value)} /></td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default App;
