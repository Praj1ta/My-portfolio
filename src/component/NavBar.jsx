const NavBar = () => (
  <nav className="from-gray-200 via-gray-300 to-gray-400 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 w-full ">
   
    <div className="flex items-center space-x-2 mb-3 md:mb-0">
      
      <p className="text-xl font-bold text-gray-800"> <span className="text-4xl">P</span>rajita</p>
    </div>

   
    <div className="flex space-x-4 md:space-x-6 font-medium text-gray-700">
      <a className="hover:text-red-700  inline-block transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1" href="#home">Home</a>
      <a className="hover:text-red-700 inline-block transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1" href="#about">About Me</a>
      <a className="hover:text-red-700 inline-block transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1" href="#skill">Skill</a>
      <a className="hover:text-red-700 inline-block transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1" href="#projects">Projects</a>
      <a className="hover:text-red-700 inline-block transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1" href="#services">Services</a>
    </div>

 
    <div className="mt-3 md:mt-0">
      <a
        href="#connect"
        className="border-2 border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white inline-block transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1"
      >
        Connect
      </a>
    </div>
  </nav>
);

export default NavBar;
