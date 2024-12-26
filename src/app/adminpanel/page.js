import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 h-screen w-64 bg-blue-800 text-white">
          <nav>
            <ul>
              <li className="p-4 hover:bg-blue-700">Dashboard</li>
              <li className="p-4 hover:bg-blue-700">Components</li>
              <li className="p-4 hover:bg-blue-700">Admin Profile</li>
              <li className="p-4 hover:bg-blue-700">Utilities</li>
              <li className="p-4 hover:bg-blue-700">Pages</li>
              <li className="p-4 hover:bg-blue-700">Charts</li>
              <li className="p-4 hover:bg-blue-700">Tables</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-6 bg-gray-900 text-gray-100">
          <div className="bg-gray-800 p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold">Admin Profile</h1>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add Admin Profile
              </button>
            </div>
            <table className="min-w-full border-collapse border border-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="border border-gray-700 px-4 py-2 text-left">ID</th>
                  <th className="border border-gray-700 px-4 py-2 text-left">Username</th>
                  <th className="border border-gray-700 px-4 py-2 text-left">Email</th>
                  <th className="border border-gray-700 px-4 py-2 text-left">Password</th>
                  <th className="border border-gray-700 px-4 py-2 text-left">Edit</th>
                  <th className="border border-gray-700 px-4 py-2 text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, username: "ved", email: "ved@gmail.com", password: "1234" },
                  { id: 2, username: "funda", email: "funda@gmail.com", password: "1234" },
                  { id: 3, username: "Funda2", email: "g@g.c", password: "1234" },
                  { id: 4, username: "Ved 2", email: "ved2@gmail.com", password: "1236" },
                ].map((user) => (
                  <tr key={user.id} className="hover:bg-gray-700">
                    <td className="border border-gray-700 px-4 py-2">{user.id}</td>
                    <td className="border border-gray-700 px-4 py-2">{user.username}</td>
                    <td className="border border-gray-700 px-4 py-2">{user.email}</td>
                    <td className="border border-gray-700 px-4 py-2">{user.password}</td>
                    <td className="border border-gray-700 px-4 py-2">
                      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                        Edit
                      </button>
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
