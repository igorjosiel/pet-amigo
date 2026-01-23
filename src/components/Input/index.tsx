interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
}

function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      className="h-10 w-full rounded-lg border border-blue-light px-8 py-2 outline-1 outline-secondary focus:outline-2 focus:ring-1 focus:ring-secondary"
      placeholder={placeholder}
    />
  );
}

export default Input;
