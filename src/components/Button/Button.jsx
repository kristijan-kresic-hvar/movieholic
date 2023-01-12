import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ children, icon, iconPosition, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <div
        style={iconPosition === "left" ? { order: 2 } : {}}
        className={styles.button__children}
      >
        {children}
      </div>
      {icon && (
        <img
          style={iconPosition === "left" ? { order: 1 } : {}}
          src={icon}
          alt="icon illustration"
        />
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;
