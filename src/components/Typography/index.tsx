import { cva, type VariantProps } from "class-variance-authority";

const typography = cva([], {
  variants: {
    variant: {
      primary: ["text-primary text-base pt-2.5"],
      secondary: [""],
      error: ["text-danger", "text-[14px]"],
    },
    defaultVariants: {
      variant: "primary",
    },
  },
});

interface TypographyProps
  extends
    React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typography> {
  children: React.ReactNode;
}

function Typography({ children, variant, ...props }: TypographyProps) {
  return (
    <p className={typography({ variant })} {...props}>
      {children}
    </p>
  );
}

export default Typography;
