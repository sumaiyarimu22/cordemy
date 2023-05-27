import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "rounded-lg transition-colors duration-300 flex justify-center",
  {
    variants: {
      color: {
        primary: "bg-black text-white hover:bg-gray-700",
        secondary:
          "text-gray-400 hover:bg-gray-200 hover:text-gray-600  border border-white",
        danger: "bg-rose-500 text-white hover:bg-rose-600",
      },
      size: {
        default: "py-2 px-5",
        full: "py-3 w-full",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
