const Services = () =>
    <div
     id="services"
    className=" h-screen p-8 md:p-16 rounded-xl  ">
        
    <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">
      Services
    </p>
      <div className=" flex justify-between gap-6 ">
       
        <div className="bg-white flex flex-col items-center justify-between gap-2 p-4  w-[400px] shadow rounded-2xl ">
          <i className="fa-solid fa-user text-3xl"></i>
          <p className="text-2xl text-red-600">Web Development</p>

          <p>
            We offer professional web development services to help you build
            fast,responsive, and user-friendly websites.
          </p>
          <button className="bg-black text-white hover:bg-white hover:text-red-600 border border-black transition-colors duration-300 rounded-2xl px-5 py-3 shadow-md ">
            view services
          </button>
        </div>
        
        <div className="bg-white flex flex-col justify-between items-center gap-2 p-4 w-[400px] shadow rounded-2xl">
          <i className="fa-solid fa-bars text-3xl"></i>
          <p className="text-2xl text-red-600">Web Development</p>

          <p>
            Need a website? We design and develop modern websites that work
            beautifully on all devices.
          </p>
          <button className="bg-black text-white hover:bg-white hover:text-red-600 border border-black transition-colors duration-300 rounded-2xl px-5 py-3 shadow-md ">
            {" "}
            view services
          </button>
        </div>
        {/* Third box  */}
        <div className="bg-white flex flex-col items-center justify-between gap-2 p-4 w-[400px] shadow rounded-2xl">
          <i className="fa-solid fa-bell text-3xl"></i>
          <p className="text-2xl text-red-600">Web Development</p>

          <p>We build websites that grow your business.</p>
          <button className="bg-black text-white hover:bg-white hover:text-red-600 border border-black transition-colors duration-300 rounded-2xl px-5 py-3 shadow-md">
            {" "}
            View services
          </button>
        </div>

        </div>


      </div>  
    

    export default Services