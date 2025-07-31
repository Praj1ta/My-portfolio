import { PrimaryButton } from "./button";
const Home = () => (
  <main id="home" 
  className="flex flex-col items-center justify-evenly h-screen md:flex-row md:space-y-0 ">
    
    
    <div className="mt-24 md:mt-36 space-y-5 text-center md:text-left">
      <p>
        <span className="text-4xl md:text-5xl text-gray-800 font-medium">Hey, This is</span>
        <br />
        <span className="text-5xl md:text-6xl text-gray-800 font-bold">
          Prajita <span className="text-red-600">Bh</span>attarai
        </span>
      </p>
      
      <p className="text-xl md:text-2xl text-gray-700 font-light">an interactive Web Developer</p>

     <div className="space-x-5 ">
           <PrimaryButton label="Let's Talk" />
     
         </div>

      <div className="flex justify-center md:justify-start space-x-5 pt-3 text-gray-600 text-xl">
        <i className="fa-solid fa-house hover:text-red-500 cursor-pointer"></i>
        <i className="fa-brands fa-facebook hover:text-blue-500 cursor-pointer"></i>
        <i className="fa-brands fa-x-twitter hover:text-black cursor-pointer"></i>
        <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer"></i>
      </div>
    </div>

    
    <div className="flex flex-col items-center mt-10 md:mt-0">
      <div className="bg-black rounded-full w-64 h-64 shadow-lg hover:scale-105 transition-transform duration-300"></div>
      <p className="max-w-md text-justify text-gray-700 text-sm mt-6 px-6">
        “Hi! I’m Prajita Bhattarai, a budding front-end developer passionate
        about building interactive and user-friendly web interfaces.”
      </p>
    </div>
  </main>
);

export default Home;
