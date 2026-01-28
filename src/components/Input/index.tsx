interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Input({ children: icon, className, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <span
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <input
        className={`
          w-full
          h-10
          pr-4
          rounded-xl
          border
          border-gray-200
          outline-secondary
          focus:outline-none
          focus:ring-1
          focus:ring-secondary
          ${icon ? "pl-10" : "pl-4"}
          ${className ?? ""}
        `}
        {...props}
      />
    </div>
  );
}

export default Input;
