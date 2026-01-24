function Button({ children }) {
  return (
    <button
      type="submit"
      className="rounded-xl bg-baby-pink text-white font-medium h-10"
    >
      {children}
    </button>
  );
}

export default Button;
