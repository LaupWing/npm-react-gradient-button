import { ComponentPropsWithoutRef, FC } from "react"
import { cn } from "../lib/utils"

const GradientButton: FC<ComponentPropsWithoutRef<"button">> = ({
    className,
    onClick,
}) => {
    return (
        <div className="relative group flex">
            <div className="absolute -inset-0.5 animate-pulse rounded blur from-custom-green bg-gradient-to-r to-custom-purple opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
            <button
                className={cn(
                    "gradient-animation-border relative p-1 rounded-md overflow-hidden shadow hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 transition duration-100 scale-100 ",
                    className
                )}
                onClick={onClick}
            >
                <div className="font-bold rounded px-4 scale-100 dark:bg-dark text-gray-600 disabled:bg-gray-200 dark:text-gray-200 dark:disabled:bg-gray-700 bg-white py-[7px]">
                    Gradient Button
                </div>
            </button>
        </div>
    )
}

export default GradientButton
