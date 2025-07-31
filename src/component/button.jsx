export const PrimaryButton = (props) => (
  <button
    className={`bg-black text-white mt-8 hover:bg-white hover:text-red-600 border border-black hover:scale-105 transition-colors duration-300 px-6 py-2 rounded-full `}
  >
    {props.label}
  </button>
);
