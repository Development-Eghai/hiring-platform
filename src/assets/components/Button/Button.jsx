import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({
  label = "Click Me",
  onClick,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  className
  
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {icon && <span>{icon}</span>}
      {label}
    </Button>
  );
};

export default CustomButton;
