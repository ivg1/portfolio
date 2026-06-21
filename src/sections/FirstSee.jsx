import { useState } from "react";

import Terminal from "../components/Terminal";

export default function FirstSee() {
    const facts = [
        "I am 16 years old",
        "Mainly software developer",
        "I do software & hardware",
        //"Learning fullstack coding",
    ];

    const code = `const person = {
    name: "Ivan Garkusha",
    age: 16,
    activities: [
        "Programming",
        "Biking",
        "Running",
        "Solving problems at home"
    ],
    skills: [
        "Javascript", "React",
        "Node.js", "some C++"
    ],
    hasCoderFriends: true,
}`;

    return (
        <div className="home first-see max-w-screen max-h-screen h-[85vh] w-full relative sm:px-[5%] lg:px-[15%]">
            <div className="flex justify-center items-center w-full h-full">
                <div className="first-see-content max-w-full max-h-screen w-full h-full md:grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="text-content p-10 min-h-100">
                        <div className="mb-10">
                            <p className="text-lg">Hi, my name is</p>
                            <h1 className="text-9xl font-black tracking-tight -mt-6 -ml-2">Ivan</h1>
                        </div>
                        <div>
                            <Terminal text="cat facts.txt" extra={facts} />
                        </div>
                    </div>
                    <div className="text-content p-4">
                        <div className="w-full h-full rounded-2xl backdrop-blur-3xl overflow-hidden max-h-full border border-borderblack">
                            <div className="bg-black1/40 w-full h-10 flex items-center px-4 gap-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="size-3" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 18 14" style={{ color: "rgb(208, 208, 208)" }}>
                                        <path fill="currentColor" d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray2 tracking-wide text-sm align-middle">
                                        aboutMe.js
                                    </p>
                                </div>
                            </div>
                            <div className="bg-black2/20 h-full w-full max-h-full max-w-full">
                                <pre className="p-2">
                                    {code}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="
                hidden
                absolute 
                bottom-0 
                left-1/2
                -translate-x-1/2 
                translate-y-[85%]
                w-full
                h-200
                bg-red-700/20
                blur-3xl
                rounded-t-3xl
                pointer-events-none
            " />
        </div>
    )
}