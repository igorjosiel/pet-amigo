import { cva } from "class-variance-authority";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "error";
}

const typography = cva([], {
  variants: {
    variant: {
      primary: ["text-primary text-base pt-2.5"],
      secondary: [""],
      error: ["text-danger", "text-[14px]"],
    },
  },
});

function Typography({ children, variant = "primary", ...props }: TypographyProps) {
  return (
    <p className={typography({ variant })} {...props}>
      {children}
    </p>
  );
}

export default Typography;
