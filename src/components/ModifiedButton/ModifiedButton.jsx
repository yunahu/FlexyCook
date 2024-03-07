import Button from "react-bootstrap/Button";
import styles from "./ModifiedButton.module.css";

const map = {
  primary: styles["variant-primary"],
  secondary: styles["variant-secondary"],
  success: styles["variant-success"],
  danger: styles["variant-danger"],
  warning: styles["variant-warning"],
  info: styles["variant-info"],
  light: styles["variant-light"],
  dark: styles["variant-dark"], //for advanced search button
};

const ModifiedButton = ({
  title,
  disabled,
  onClick,
  className,
  variant = "primary",
}) => {
  return (
    <Button
      variant={variant}
      className={map[variant] + " " + className}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ModifiedButton;
