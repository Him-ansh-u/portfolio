import { memo } from "react";

const VARIANT_CLASSES = {
  primary: "button-primary",
  secondary: "button-secondary",
  outline: "button-outline",
} as const;

type ButtonProps = {
  variant: keyof typeof VARIANT_CLASSES;
  children: React.ReactNode;
};

const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button
      className={`py-2 px-3 text-center text-white cursor-pointer rounded-lg max-w-[200px] flex gap-2 flex justify-center items-center ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </button>
  );
};

export default memo(Button);
