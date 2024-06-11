import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  [x: string]: any;
}

const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

export default Button;
