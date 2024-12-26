import Image from 'next/image';

export default function Header() {
  return (
    <>
        <header className="bg-sereneBlue-700 text-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <div data-aos="fade-up">
              <a href='../'>
              <Image
                src="/logocrop.jpg"
                width={100}
                height={100}
                alt="Picture of the logo"
                />
              </a>
            </div>
            <nav>
            <ul className="flex space-x-6">
  <li className="flex space-x-4">
    {/* Home Box */}
    <a href='../' className="hover:text-gray-300">
    <div className="border border-black p-2 rounded-lg">
        Home
    </div>
    </a>
    {/* LogIn Box */}
    <a href='../login' className="hover:text-gray-300">
    <div className="border border-black p-2 rounded-lg">
        LogIn
    </div>
    </a>
  </li>
</ul>
            </nav>
          </div>
        </header>
    </>
  );
}
