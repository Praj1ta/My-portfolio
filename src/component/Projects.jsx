
    
const Project = () => 
 
    <section id="projects" className=" px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min:h-screen  md:p-16 ">
      <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">My Projects</p>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-28">
       
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/clock.JPG"
            alt="Digital Clock"
            className="w-full h-50 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold">Digital Clock</h3>
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/calc.JPG"
            alt="Calculator"
            className="w-full h-50 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300 "
          />
          <h3 className="text-xl font-semibold">Calculator</h3>
        </div>

        <div className="bg-white p-4 rounded-lg mb-12 shadow-md text-center">
          <img
            src="/portfolio.JPG"
            alt="Calculator"
            className="w-full h-50 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold ">Portfolio</h3>
        </div>

       
      </div>
    </section>


export default Project