
import {useState} from 'react';
const Header = () => {
  
   const [btnInfo,setBtnInfo]=useState("Login");
   
  
   const handleClick = ()=>
   {
     btnInfo==="Login" ?setBtnInfo("Logout"):setBtnInfo("Login")
   }

  return (
    <div>
      <nav className="bg-gray-800  border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdna.artstation.com/p/assets/images/images/036/244/842/large/jowel-ahmed-foodstay-logo-design-01.jpg?1617123593"
              className="h-8"
              alt="Flowbite Logo"
              height={80}
            />
            <span className="self-center text-2xl color text-white font-semibold whitespace-nowrap light:text-white">
              The Golden Spoon
            </span>
          </a>
          <div className="flex items-center color text-white md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          <button
          onClick={handleClick}
          className="relative inline-block px-6 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring focus:border-blue-300 active:from-purple-700 active:to-pink-700 active:shadow-md active:scale-95 rounded-full">
            {btnInfo}
          </button>


            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign up
            </a>
            
          </div>
          <div
            id="mega-menu-icons"
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 color text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-icons-dropdown-button"
                  data-dropdown-toggle="mega-menu-icons-dropdown"
                  className="flex items-center justify-between color text-white w-full py-2 px-3 font-medium  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 color text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
