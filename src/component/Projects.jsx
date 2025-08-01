
    
const Project = () => 
 
    <section id="projects" className="h-screen  md:p-16 rounded-xl">
      <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">My Projects</p>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-28">
       
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/clock.JPG"
            alt="Digital Clock"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Digital Clock</h3>
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/calc.JPG"
            alt="Calculator"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Calculator</h3>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/calc.JPG"
            alt="Calculator"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Calculator</h3>
        </div>

       
      </div>
    </section>


export default Project