const GradientButton = () => {
    return (
        <button
            className={
                "gradient-animation-border relative p-1 rounded-md overflow-hidden shadow hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 transition duration-100 scale-100 "
            }
        >
            <div className="font-bold rounded px-4 scale-100 dark:bg-dark text-gray-600 disabled:bg-gray-200 dark:text-gray-200 dark:disabled:bg-gray-700 bg-white py-[7px]">
                Gradient Button
            </div>
        </button>
    )
}

export default GradientButton
