const options = {
    standard: "hover:cursor-pointer flex items-center justify-center px-4 py-2 rounded-lg",
    blurredbg: "backdrop-blur-xl",
    solidbgRed: "bg-red-700 hover:bg-red-800",
    solidbgBlack: "bg-black "
};

const colors = {
    default: "hover:bg-white/4",
    grayBorder: "border border-transparent hover:border-gray3",
    red: "hover:bg-darkred/20"
}

const transition = {
    default: "transition duration-200"
}

export default function Button({ option, color, children, link = false }) {
    return (
        <button 
            className={`${transition.default} ${options.standard} ${options[option]} ${colors[color]}`}
            {...(link && {
                onClick: () => { window.open(link, "_blank") }
            })}
        >
            {children}
        </button>
    );
}