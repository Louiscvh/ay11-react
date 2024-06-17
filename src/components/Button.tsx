import { clsx } from "clsx";
import { ReactNode } from "react";

export const Button = ({ children, variant, className, onClick, role, type = "button" }: { children: ReactNode, variant?: "primary" | "secondary" | "ghost", className?: string, onClick?: () => void, role?: string, type?: "button" | "submit" | "reset" }) => {

    const buttonVariants = {
        primary: "bg-custom-cartier text-white",
        secondary: "bg-white text-custom-cartier",
        ghost: "bg-transparent px-0 py-0 text-black",
    }

    return (
        <button tabIndex={1} className={clsx(className, buttonVariants[variant || "primary"], "py-3 px-6 bg-custom-dark-cartier text-white font-semibold focus:outline-2 focus:outline-custom-cartier focus:outline-offset-4")} onClick={onClick} type={type} role={role}>
            {children}
        </button>
    )
}