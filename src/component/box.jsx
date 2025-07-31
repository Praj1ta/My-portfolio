function Box({ id, title, description, buttonlebel }) {
  return (
    <div className="bg-gray-300 flex flex-col items-center justify-between gap-2 p-4  w-[400px]  rounded-2xl ">
      <i className="fa-solid fa-user text-3xl"></i>
      <p className="text-2xl text-red-600">{title}</p>

      <p className="text-xl md:text-2xl text-gray-700">{description}</p>
      <button className="bg-black text-white mt-8 hover:bg-white hover:text-red-600 border border-black hover:scale-105 transition-colors duration-300 px-6 py-2 rounded-full ">
        <a href="">{buttonlebel}</a>
      </button>
    </div>
  );
}
export default Box;