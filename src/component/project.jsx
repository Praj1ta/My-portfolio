// const Projects = () =>
    // <div
    //  id="projects"
    // className="  ">
        
    // <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">
    //   My Project
    // </p>
    // <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
    //     </div>


    //   </div>  
    
const Projects = () => 
 
    <section id="projects" className=" h-screen p-8 md:p-16 rounded-xl">
      <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">My Projects</p>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
       
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/images/clock.png"
            alt="Digital Clock"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Digital Clock</h3>
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/images/calculator.png"
            alt="Calculator"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Calculator</h3>
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="/images/todolist.png"
            alt="To-Do List"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">To-Do List</h3>
        </div>
      </div>
    </section>


export default Projects