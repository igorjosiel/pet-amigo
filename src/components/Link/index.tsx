import { Link as Anchor } from "react-router";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  className?: string;
  path: string;
}

function Link({ children, className, path, ...props }: LinkProps) {
  return (
    <Anchor
      to={path}
      className={`text-right text-primary font-bold ${className || ""}`}
      {...props}
    >
      {children}
    </Anchor>
  );
}

export default Link;
