import NavBar from "./NavBar";

const About = () => (
  <section
    id="about"
    className="px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min:h-screen p-8 md:p-16 rounded-xl  "
  >
    
    <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">
      About Me
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-14">
      <div>
        <img
          className="w-64 h-64 rounded-full bg-gray-400 hover:scale-105 "
          src="/profile.jpg"
          alt=""
        />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <p className="text-lg md:text-2xl text-gray-700 ">
          “Hello! I’m
          <span className="text-red-600 font-semibold"> Prajita Bhattarai</span>
          , starting my journey into front‑end development. I’m working on
          portfolio sites and interactive components to sharpen my skills.
          Always open to feedback or collaboration—let’s build something amazing
          together.”
        </p>

        <p className="mt-8 text-sm md:text-base text-red-700 font-medium">
          📧{" "}
          <a
            href="mailto:prajubhattarai2@gmail.com"
            className="hover:underline hover:text-red-500"
          >
            prajubhattarai2@gmail.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default About;
