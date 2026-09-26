import "./Skills.css";
import React from "react";

export default function Skills() {
    const codingSkills = [
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
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            text: "Python"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
            text: "C++"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            text: "Github"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            text: "Git"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
            text: "Arduino"
        },
    ];
    
    const hobbiesSkills = [
        "Calisthenics",
        "Biking",
        "Piano",
        "Tennis",
        "CAD & 3D printing",
        "Chess",

    ];

    return (
        <div className="skills w-full min-h-120 h-fit max-w-full p-10 mb-10 scroll-mt-20" id="skills">
            <div>
                <div className="py-10">
                    <p className="text-md text-gray2">some of my</p>
                    <h1 className="text-6xl font-black tracking-tight">Skills</h1>
                </div>
                <div className="mb-10">
                    <div className="w-full min-h-fit mb-10 rounded-2xl backdrop-blur-3xl overflow-hidden max-h-full max-w-full border border-gray1">
                        <div className="bg-black1/40 w-full h-10 flex items-center px-4 gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="size-3" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 18 14" style={{ color: "rgb(208, 208, 208)" }}>
                                    <path fill="currentColor" d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray2 tracking-wide text-sm align-middle">
                                    short msg
                                </p>
                            </div>
                        </div>
                        <div className="bg-black2/20 h-full w-full min-h-fit max-w-full p-4 whitespace-pre-wrap">
                            <p>
                                I have a lot of skills ranging from programming to sports, music, and more. And I am always learning something new.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl font-bold tracking-wide mb-2 w-full text-center mb-10">
                    I do a bit of <span className="rainbow-text text-4xl">everything</span>.
                </h1>
                <div>
                    <div className="skills-list mb-8 flex flex-wrap gap-2 md:px-10">
                        <h1 className="text-4xl font-bold tracking-wide mb-2 w-full">Coding</h1>
                        {codingSkills.map((skill, i) => (
                            <div className="skill flex flex-row items-center justify-center px-4 py-2 rounded-lg backdrop-blur-xl border border-transparent bg-black/30 hover:bg-white/4 max-h-fit max-w-fit" key={i}>
                                <img src={skill.icon} className="w-10 h-10 rounded-sm"/> {/* mr-4 */}
                                {/* <p className="text-2xl font-semibold">{skill.text}</p> */}
                            </div>
                        ))}
                    </div>
                    <div className="skills-list mb-8 flex flex-wrap gap-2 md:px-10">
                        <h1 className="text-4xl font-bold tracking-wide mb-2 w-full">Hobbies</h1>
                        {hobbiesSkills.map((text, i) => (
                            <div className="skill flex flex-row items-center justify-center px-4 py-2 rounded-lg backdrop-blur-xl border border-transparent bg-black/30 hover:bg-white/4 max-h-fit max-w-fit" key={i}>
                                <p className="text-2xl font-semibold">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}