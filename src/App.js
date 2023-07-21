import React, { useState } from 'react';

const App = () => {
  const sampleData = [
    {

      "id": 0,
  
      "name": "Uthappizza",
  
      "image": "https://i.imgur.com/tDnjTXf.jpg",
  
      "category": "mains",
  
      "label": "Hot",
  
      "price": "4.99",
  
      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza"
  
    },
  
    {
  
      "id": 1,
  
      "name": "Zucchipakoda",
  
      "image": "https://i.imgur.com/xkUElXq.jpg",
  
      "category": "appetizer",
  
      "label": "",
  
      "price": "1.99",
  
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  
    },
  
    {
  
      "id": 2,
  
      "name": "Vadonut",
  
      "image": "https://i.imgur.com/anUAlqF.jpg",
  
      "category": "appetizer",
  
      "label": "New",
  
      "price": "1.99",
  
      "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
  
    },
  
    {
  
      "id": 3,
  
      "name": "ElaiCheese Cake",
  
      "image": "https://i.imgur.com/c5hBTEW.jpg",
  
      "category": "dessert",
  
      "label": "",
  
      "price": "2.99",
  
      "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  
    },
  
    {
  
      "id": 4,
  
      "name": "Guntur chillies",
  
      "image": "https://i.imgur.com/Vc9JIXP.jpg",
  
      "category": "appetizer",
  
      "label": "Spicy",
  
      "price": "0.99",
  
      "description": "Assorted chillies from Guntur"
  
    },
  
    {
  
      "id": 5,
  
      "name": "Buffalo Paneer",
  
      "image": "https://i.imgur.com/pH2tkgk.jpg",
  
      "category": "appetizer",
  
      "label": "",
  
      "price": "5.99",
  
      "description": "A special type of Paneer made from Buffalo milk"
  
    },
  
    {
  
      "id": 6,
  
      "name": "Cherry Tomatoes",
  
      "image": "https://i.imgur.com/fRy8hjE.jpg",
  
      "category": "clone",
  
      "label": "clone",
  
      "price": "9.99",
  
      "description": "clone of cherry and tomato"
  
    },
  
    {
  
      "id": 7,
  
      "name": "Goat Milk",
  
      "image": "https://i.imgur.com/zFGPhrI.jpg",
  
      "category": "weird",
  
      "label": "weird",
  
      "price": "1.99",
  
      "description": "Medicinal Goat Milk"
  
    },
  
    {
  
      "id": 8,
  
      "name": "Rose breasted Grosbeak chicken",
  
      "image": "https://i.imgur.com/RYsqgoo.jpg",
  
      "category": "appetizer",
  
      "label": "New",
  
      "price": "7.99",
  
      "description": "Roasted rare bird"
  
    },
  
    {
  
      "id": 9,
  
      "name": "Toenail Zingy",
  
      "image": "https://i.imgur.com/IpG3YOT.jpg",
  
      "category": "appetizer",
  
      "label": "weird",
  
      "price": "0.99",
  
      "description": "Cooked Toenails of various animals"
  
    }
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
