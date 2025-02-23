import { useRouter } from "next/navigation";

const MainAdminSidebar = ({ selectedSection, setSelectedSection }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    router.push("/login"); // Redirect to login page
  };

  return (
    <aside className="w-72 bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 flex flex-col items-center shadow-lg min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Main Admin Panel</h2>
      <nav className="space-y-6 w-full flex-grow">
        <button
          onClick={() => setSelectedSection("orders")}
          className={`w-full text-left py-2 px-4 rounded-lg text-lg hover:bg-blue-400 transition ${
            selectedSection === "orders" ? "bg-blue-400" : ""
          }`}
        >
          Order Management
        </button>
        <button
          onClick={() => setSelectedSection("products")}
          className={`w-full text-left py-2 px-4 rounded-lg text-lg hover:bg-blue-400 transition ${
            selectedSection === "products" ? "bg-blue-400" : ""
          }`}
        >
          Product Management
        </button>
        <button
          onClick={() => setSelectedSection("pharmacists")}
          className={`w-full text-left py-2 px-4 rounded-lg text-lg hover:bg-blue-400 transition ${
            selectedSection === "pharmacists" ? "bg-blue-400" : ""
          }`}
        >
          Pharmacist Management
        </button>
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full mt-8 py-2 px-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-500 transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default MainAdminSidebar;
