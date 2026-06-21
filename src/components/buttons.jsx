const options = {
    standard: "hover:cursor-pointer flex items-center justify-center px-4 py-2 rounded-lg",
    blurredbg: "backdrop-blur-xl"
};

const colors = {
    default: "hover:bg-white/4",
    red: "hover:bg-darkred/20"
}

const transition = {
    default: "transition duration-200"
}

export default function Button({ option, color, children }) {
    return (
        <button className={`${transition.default} ${options.standard} ${options[option]} ${colors[color]}`}>
            {children}
        </button>
    );
}