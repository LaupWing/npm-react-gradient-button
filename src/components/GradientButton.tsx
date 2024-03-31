const GradientButton = () => {
    return (
        <div
            className={
                "gradient-animation-border shadow hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 transition duration-100 scale-100 "
            }
        >
            <button className="rounded font-bold px-4 scale-100 bg-light dark:bg-dark text-gray-600 disabled:bg-gray-200 dark:text-gray-200 dark:disabled:bg-gray-700 bg-white py-[7px]">
                test
            </button>
        </div>
    )
}

export default GradientButton
