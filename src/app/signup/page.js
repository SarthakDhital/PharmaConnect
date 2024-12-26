import Nav from "../components/nav";
import Footer from '../components/Footer';

export default function Signup() {
  return (
    <>
      <div className="header">
        <Nav />
      </div>

      <div className="flex items-center justify-center bg-gray-100 py-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Create New Account
          </h3>
          <form>
            <div className="space-y-4">
              {/* Full Name */}
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Location */}
              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 space-y-4">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Sign Up
              </button>

              <div className="flex items-center justify-center">
                  <button
                    type="button"
                    className="flex items-center px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 transition duration-200"
                  >
                    <img
                      src="#"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-gray-700 font-medium">
                      Sign in with Google
                    </span>
                  </button>
                </div>
            </div>
          </form>

          {/* Already have an account */}
          <div className="text-center text-black mt-6">
            Already have an account?{" "}
            <a href="../login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
