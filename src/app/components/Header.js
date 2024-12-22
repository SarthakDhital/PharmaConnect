export default function Header() {
  return (
    <>
    <div className="bg-gray-100 text-gray-700 text-sm py-2 px-4 flex justify-between items-center">
      {/* Left Section */}
      <div>
        <span className="mr-4">📍 Koteshwor, Kathmandu, Nepal</span>
        <span>📞 984392958 | ✉️ info@pharmaconnect.com</span>
      </div>

      {/* Right Section */}
      {/* <div className="space-x-4">
        <button className="text-red-600 hover:underline">Sign Up</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
          Log In
        </button> */}
      </div>
    </div>
    </>
  );
}
