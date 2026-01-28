interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button
      type="submit"
      className="rounded-xl bg-baby-pink text-white font-medium h-10 cursor-pointer mt-3"
    >
      {children}
    </button>
  );
}

export default Button;
