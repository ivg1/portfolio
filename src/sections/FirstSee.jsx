import { useState } from "react";

import Terminal from "../components/Terminal";

import Animations from "../components/animations";

export default function FirstSee() {
    const facts = [
        "16 years old",
        "Future Mechanical Engineer",
        "Software & hardware developer",
        "Go by ivg1 online",
        "Always learning something new",
    ];

    return (
        <div className="home first-see max-w-screen max-h-screen  min-h-fit w-full relative sm:px-[5%] lg:px-[10%] mb-10 scroll-mt-20" id="home">
            <div className="flex justify-center items-center w-full h-full">
                <div className="first-see-content max-w-full w-full h-full md:grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="text-content p-10 min-h-180">
                        <div className="mb-10">
                            <p className="text-lg">Hi, my name is</p>
                            <Animations.FloatUp duration={0.6}>
                                <h1 className="lg:text-[200px] text-9xl font-black tracking-tight -mt-4 lg:-mt-8 -ml-2">Ivan</h1>
                            </Animations.FloatUp>
                        </div>
                        <div>
                            <Terminal text="cat facts.txt" extra={facts} />
                        </div>
                    </div>
                    <div className="text-content p-4 flex items-center mb-2">
                        <div className="w-full h-120 min-h-fit mb-10 rounded-2xl backdrop-blur-3xl overflow-hidden max-h-full max-w-full border border-gray1">
                            <div className="bg-black1/40 w-full h-10 flex items-center px-4 gap-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="size-3" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 18 14" style={{ color: "rgb(208, 208, 208)" }}>
                                        <path fill="currentColor" d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray2 tracking-wide text-sm align-middle">
                                        about me
                                    </p>
                                </div>
                            </div>
                            <div className="bg-black2/20 h-full w-full min-h-fit max-w-full p-4 whitespace-pre-wrap">
                                <p>
                                    I am a 16 year old <span className="text-red-500 font-bold">highschool</span> student, and I mostly spend my time doing sports and programming.
                                    <br /><br />
                                    I am a <span className="font-bold bg-linear-[25deg] from-red-600 to-orange-400 bg-clip-text text-transparent">full-stack</span> developer. I also do hardware projects.
                                    <br /><br />
                                    I started my programming journey in 2023 with a simple html webpage. Ever since then, I have slowly learned more about programming along my other interests, and now I know quite a bit about computers too.
                                    <br /><br />
                                    I am good at maths and physics and I am planning to become a <span className="text-red-500 font-bold">mechanical engineer</span> in the future. Progamming being my secondary interest.
                                    <br /><br />
                                    (this page is a work in progress, and everything is going to change on this page in the future)
                                </p>
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
