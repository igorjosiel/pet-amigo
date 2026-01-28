interface LinkProps {
  children: string;
}

function Link({ children }: LinkProps) {
  return <a className="text-right text-primary font-bold">{children}</a>;
}

export default Link;
