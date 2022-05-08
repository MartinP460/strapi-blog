import propTypes from 'prop-types';

function Input({ onChange, className, children }) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute mt-2 ml-3 h-5 w-5">
        {children}
      </span>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onChange(e)}
        className="outline outline-2 outline-[#988C75]
            bg-transparent py-2 pl-10 rounded focus:outline-[#AFB049]
            transition-all"
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  onChange: propTypes.func.isRequired,
  className: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

Input.defaultProps = {
  className: '',
};
