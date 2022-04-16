import PropTypes from "prop-types";
import "./Button.module.css";

const Button = ({ onClick, children, disabled = "false" }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
