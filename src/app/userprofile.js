import { useState } from "react";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, City, Country",
    medicalInfo: "Diabetic",
    orderHistory: [
      { id: 1, product: "Insulin Mixtard 30 HM", date: "2024-12-10", amount: 631.79 },
      { id: 2, product: "Plum 2% Niacinamide SPF 50", date: "2024-12-15", amount: 574.56 },
    ],
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      {/* User Details */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
              ></textarea>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> {userData.name}</p>
            <p><span className="font-semibold">Email:</span> {userData.email}</p>
            <p><span className="font-semibold">Phone:</span> {userData.phone}</p>
            <p><span className="font-semibold">Address:</span> {userData.address}</p>
          </div>
        )}

        <div className="mt-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          )}
          {isEditing && (
            <button
              onClick={handleEditToggle}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 ml-2"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Medical Information */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
        <p>{userData.medicalInfo}</p>
      </div>

      {/* Order History */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {userData.orderHistory.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.product}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">Rs {order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
