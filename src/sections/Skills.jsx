export default function SKills() {
    const skills = [
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            text: "Javascript"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            text: "React"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            text: "NodeJS"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            text: "PostgreSQL"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            text: "Vite"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
            text: "npm"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
            text: "Arch"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            text: "Github"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            text: "Git"
        },
    ];

    return (
        <div className="skills w-full min-h-120 h-fit max-w-full p-10 mb-10">
            <div>
                <p className="text-md text-gray2">stuff i know how to use</p>
                <h1 className="text-6xl font-black tracking-tight">Skills</h1>
                <div className="skills-list mt-10 mb-8 flex flex-wrap gap-4">
                    {skills.map((skill, i) => (
                        <div className="skill flex items-center justify-center px-4 py-2 rounded-lg backdrop-blur-xl border border-transparent bg-black/30 hover:bg-white/4" key={i}>
                            <img src={skill.icon} className="w-10 h-10 mr-2 rounded-sm"/>
                            <p className="text-2xl font-semibold">{skill.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}