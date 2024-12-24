import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="bg-sereneBlue-700 text-white shadow-md">
          <span >📍 Koteshwor, Kathmandu, Nepal. </span>
          <span> 📞 +977-9843929658 | ✉️ support@pharmaconnect.com</span>
      </div>
        <header className="bg-sereneBlue-700 text-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <div>
              <Image
                src="/logo.jpg"
                width={200}
                height={100}
                alt="Picture of the logo"
              />
            </div>
            <nav>
            <ul className="flex space-x-6">
  <li className="flex space-x-4">
    {/* LogIn Box */}
    <div className="border border-black p-2 rounded-lg">
      <button className="hover:text-gray-300">
        LogIn
      </button>
    </div>

    {/* Home Box */}
    <div className="border border-black p-2 rounded-lg">
      <button className="hover:text-gray-300">
        Home
      </button>
    </div>
  </li>
</ul>
            </nav>
          </div>
        </header>
    </>
  );
}
