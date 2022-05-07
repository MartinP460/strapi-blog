/* eslint-disable react/prop-types */
function ShareButton({ children }) {
  return (
    <button
      type="button"
      className="w-10 h-10 bg-[#3B3331] flex items-center justify-center rounded-full"
    >
      {children}
    </button>
  );
}

export default ShareButton;
