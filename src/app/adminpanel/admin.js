'use client'
import { useState } from 'react';
import Sidebar from './sidebar';

export default function Admin() {
  const [items, setItems] = useState([
    { id: 1, name: 'Aspirin', price: 5, quantity: 20 },
    { id: 2, name: 'Ibuprofen', price: 3, quantity: 50 },
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '', quantity: '' });
  const [editItem, setEditItem] = useState(null);

  const handleAddItem = () => {
    const item = { ...newItem, id: Date.now() };
    setItems([...items, item]);
    setNewItem({ name: '', price: '', quantity: '' });
  };

  const handleEditItem = () => {
    const updatedItems = items.map((item) =>
      item.id === editItem.id ? { ...item, ...editItem } : item
    );
    setItems(updatedItems);
    setEditItem(null);
  };

  const handleDeleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div>
      <Sidebar/>
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Admin Panel - Pharmacy</h1>

        {/* Add Item Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-medium mb-4">Add New Item</h2>
          <input
            type="text"
            className="block w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-md mb-2"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="number"
            className="block w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-md mb-2"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <input
            type="number"
            className="block w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-md mb-4"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          />
          <button
            onClick={handleAddItem}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Item
          </button>
        </div>

        {/* Edit Item Section */}
        {editItem && (
          <div className="mb-6">
            <h2 className="text-2xl font-medium mb-4">Edit Item</h2>
            <input
              type="text"
              className="block w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-md mb-2"
              value={editItem.name}
              onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
            />
            <input
              type="number"
              className="block w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-md mb-2"
              value={editItem.price}
              onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
            />
            <input
              type="number"
              className="block w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-md mb-4"
              value={editItem.quantity}
              onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })}
            />
            <button
              onClick={handleEditItem}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Items List */}
        <h2 className="text-2xl font-medium mb-4">Items List</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Item Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">${item.price}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2 flex space-x-2">
                  <button
                    onClick={() => setEditItem(item)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
