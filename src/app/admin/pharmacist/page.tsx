'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import { useRouter } from 'next/navigation';

const PharmacistAdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedSection, setSelectedSection] = useState('createProduct');
  const accessToken = localStorage.getItem('token');
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: null,
    expiryDate: '',
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      setErrorMessage('You must be logged in to access this page.');
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://pharmaconnect-backend.onrender.com/products/getAllProduct',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log('Fetched products:', response.data.data);
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };
    fetchProducts();
  }, [accessToken]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://pharmaconnect-backend.onrender.com/products/deleteProduct/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('Deleted product with ID:', id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Error deleting the product.');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!accessToken) {
      setErrorMessage('You must be logged in to add a product.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', newProduct.name);
      formData.append('price', newProduct.price);
      formData.append('image', newProduct.image);
      formData.append('expiryDate', newProduct.expiryDate);

      const response = await axios.post(
        'https://pharmaconnect-backend.onrender.com/products/createProduct',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Product added:', response.data.data);
      if (response.data && response.data.data) {
        setProducts((prevProducts) => [...prevProducts, response.data.data]);
        setSuccessMessage('Product added successfully!');
        setNewProduct({ name: '', price: '', image: null, expiryDate: '' });
      } else {
        setErrorMessage('Unexpected response format from server.');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setErrorMessage(
        `Error adding product: ${error.response ? error.response.data.message : error.message}`
      );
    }
  };

  const handleEditProduct = (product) => {
    console.log('Editing product:', product);
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      price: product.price,
      image: null,
      expiryDate: product.expiryDate,
    });
    setSelectedSection('editProduct');
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!accessToken) {
      setErrorMessage('You must be logged in to update a product.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', newProduct.name);
      formData.append('price', newProduct.price);
      if (newProduct.image) formData.append('image', newProduct.image);
      formData.append('expiryDate', newProduct.expiryDate);

      const response = await axios.put(
        `https://pharmaconnect-backend.onrender.com/products/updateProduct/${editingProduct._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Product updated:', response.data.data);
      if (response.data && response.data.data) {
        setProducts(
          products.map((product) =>
            product._id === editingProduct._id ? response.data.data : product
          )
        );
        setSuccessMessage('Product updated successfully!');
        setSelectedSection('productList');
      } else {
        setErrorMessage('Unexpected response format from server.');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      setErrorMessage(
        `Error updating product: ${error.response ? error.response.data.message : error.message}`
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setNewProduct({ ...newProduct, [name]: e.target.files[0] });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <main className="flex-1 p-8 overflow-auto bg-gray-100">
        {selectedSection === 'addProduct' && (
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Product</h2>
            {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
            {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
            <form onSubmit={handleAddProduct} className="space-y-6 max-w-2xl mx-auto">
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
                required
              />
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
                required
              />
              <input
                type="file"
                name="image"
                onChange={handleInputChange}
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
                required
              />
              <input
                type="date"
                name="expiryDate"
                value={newProduct.expiryDate}
                onChange={handleInputChange}
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Add Product
              </button>
            </form>
          </section>
        )}

        {selectedSection === 'editProduct' && editingProduct && (
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Edit Product</h2>
            {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
            {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
            <form onSubmit={handleUpdateProduct} className="space-y-6 max-w-2xl mx-auto">
              <input
                type="text-black"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
                required
              />
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
                required
              />
              <input
                type="file"
                name="image"
                onChange={handleInputChange}
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
              />
              <input
                type="date"
                name="expiryDate"
                value={newProduct.expiryDate}
                onChange={handleInputChange}
                className="p-4 border border-gray-300 rounded-lg w-full shadow-sm text-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Update Product
              </button>
            </form>
          </section>
        )}

        {selectedSection === 'productList' && (
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Product List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="border border-gray-200 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-lg font-bold text-green-600">${product.price}</p>
                  <p className="text-sm text-gray-500">
                    Expiry Date: {new Date(product.expiryDate).toLocaleDateString()}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default PharmacistAdminPanel;