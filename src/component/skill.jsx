const Skill = () => (
  <div id="skill" className=" h-screen p-8 md:p-16 rounded-xl  ">
    <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12 pb-9">
      Skills
    </p>
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
        <div>
      <img
        className="w-20 h-20 hover:scale-110 transition-transform duration-300"
        src="/html.png"
        alt="HTML"
        />
        <p className="mt-3 font-medium text-gray-700 pl-4">HTML</p>
      </div>
      <div>
      <img
        
        className="w-20 h-20 hover:scale-110 transition-transform duration-300"
        src="/css.png"
        alt="CSS"
        />
        <p className="mt-3 font-medium text-gray-700 pl-7">CSS</p>
        </div>
        <div>

      <img
        className="w-20 h-20 hover:scale-110 transition-transform duration-300"
        src="/java_script.png"
        alt="JAVA_SCRIPT"
        />
        <p className="mt-3 font-medium text-gray-700 pr-1">JAVA SCRIPT</p>
        </div>
        <div>

      <img
        className="w-20 h-20 hover:scale-110 transition-transform duration-300"
        src="/React.png"
        alt="REACT"
        />
        <p className="mt-3 font-medium text-gray-700 pl-4">REACT</p>
        </div>

        <div>

      <img
        className="w-20 h-20 hover:scale-110 transition-transform duration-300"
        src="/tailwind.png"
        alt="TAILWIND_CSS"
      />
      <p className="mt-3 font-medium text-gray-700">TAILWIND</p>
        </div>

          <div>

      <img
        className="w-20 h-20 hover:scale-110 transition-transform duration-300"
        src="/c++.png"
        alt="c++"
      />
      <p className="mt-3 font-medium text-gray-700 pl-7">C++</p>
        </div>

          <div>

      <img
        className="w-20 h-20 hover:scale-110 transition-transform duration-300"
        src="/c_programming.png"
        alt="c_programming"
      />
      <p className="mt-3 font-medium text-gray-700 pr-5">C_Programming</p>
        </div>
    </div>
  </div>
);

export default Skill;
