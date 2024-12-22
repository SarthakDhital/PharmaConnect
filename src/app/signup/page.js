import Head from 'next/head'

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up - PharmaConnect</title>
        <meta name="description" content="Sign up for Facebook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          {/* <h2 className="text-3xl font-bold text-center text-blue-600">Facebook</h2> */}
          <h3 className="text-lg text-center text-gray-700 mb-8">Create New Account</h3>

          <form className="space-y-4">
            {/* Full Name */}
            <div className="flex space-x-2">
              <div className="w-1/2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            {/*Location */}
            <div>
              <input
                type="location "
                name="Location"
                placeholder="Location"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            {/*Phone Number */}
            <div>
              <input
                type="phone number"
                name="phone number"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <div className="text-center text-black mt-6">
          Already have an account?<a href="../login" className="text-1center text-blue-600 mt-6"> Log in</a>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-green-500 mb-8">About Us</h1>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
            <p className="leading-relaxed mb-4">
              Welcome to <strong>Mahendra ePharmacy</strong>, your trusted pharmacy located at
              <strong> Jhamsikhel, Lalitpur, Nepal</strong>. We aim to provide quality healthcare
              products and services to our customers.
            </p>
            <p className="leading-relaxed">
              Operating hours: <strong>Sunday to Friday, 9:00AM - 5:00PM</strong>.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-3">
              <li>Email: <a href="mailto:care@epharmacy.com.np" className="text-blue-500 hover:underline">care@epharmacy.com.np</a></li>
              <li>Phone: <strong>9808787939, 9863033500</strong></li>
              <li>Address: <strong>Jhamsikhel, Lalitpur, Nepal</strong></li>
            </ul>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 border-t pt-8">
          <p className="text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Mahendra ePharmacy Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}