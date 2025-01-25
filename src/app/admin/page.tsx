"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUsers,
  FaStore,
  FaTrashAlt,
  FaEdit,
  FaSearch,
  FaUserShield,
} from "react-icons/fa";

const SuperAdminPage = () => {
  const [users, setUsers] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch users and pharmacies
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [usersRes, pharmaciesRes] = await Promise.all([
          axios.get("https://your-backend-url.com/users"),
          axios.get("https://your-backend-url.com/pharmacies"),
        ]);
        setUsers(usersRes.data);
        setPharmacies(pharmaciesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Handle Search Query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtered users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPharmacies = pharmacies.filter((pharmacy) =>
    pharmacy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle delete user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://your-backend-url.com/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle delete pharmacy
  const handleDeletePharmacy = async (pharmacyId) => {
    try {
      await axios.delete(`https://your-backend-url.com/pharmacies/${pharmacyId}`);
      setPharmacies(pharmacies.filter((pharmacy) => pharmacy.id !== pharmacyId));
    } catch (error) {
      console.error("Error deleting pharmacy:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-[#5F41E4] w-64 p-5 text-white">
        <h1 className="text-2xl font-bold mb-8">Super Admin Dashboard</h1>
        <ul>
          <li className="mb-4 flex items-center">
            <FaUserShield className="mr-2" /> Manage Users
          </li>
          <li className="mb-4 flex items-center">
            <FaStore className="mr-2" /> Manage Pharmacies
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-gray-100 text-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        </div>

        {/* Search Bar */}
        <div className="mb-5">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for users or pharmacies"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Users Management Section */}
        <div className="mb-10">
          <h2 className="font-bold text-xl mb-4">Users</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <div className="flex items-center">
                    <FaUsers className="mr-2" />
                    <p>{user.name}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      onClick={() => alert("Edit user functionality is not implemented yet")}
                      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pharmacies Management Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Pharmacies</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredPharmacies.map((pharmacy) => (
                <div key={pharmacy.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <div className="flex items-center">
                    <FaStore className="mr-2" />
                    <p>{pharmacy.name}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDeletePharmacy(pharmacy.id)}
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      onClick={() => alert("Edit pharmacy functionality is not implemented yet")}
                      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPage;
