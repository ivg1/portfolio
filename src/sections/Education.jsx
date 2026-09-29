import React from "react";

export default function Education() {
    const igcses = [
        { name: "Mathematics", score: "A*" },
        { name: "Physics", score: "A*" },
        { name: "Computer Science", score: "A*" },
        { name: "Biology", score: "A*" },
        { name: "Chemistry", score: "A*" },
        { name: "Russian 1st Language", score: "A*" },
        { name: "English 1st Language", score: "A" },
        { name: "French", score: "A" },
        { name: "Business Studies", score: "A" },
        { name: "Music", score: "B" },
    ];
    const competitions = [
        { name: "Cyprus Math Olympiad", desc: "Earned 3rd place once" },
        { name: "Cyprus Informatics Olympiad", desc: "Reached the final 2 times" },
        { name: "Cyprus Pancyprian Competition", desc: "Participated multiple times, nearly passed next round" },
        { name: "UKMT Senior Maths Challenge", desc: "Multiple bronze awards"},
        { name: "UKMT Intermediate Maths Challenge", desc: "Multiple silver & bronze awards"},
        { name: "3D Priting Competition", desc: "1st place" },
        { name: "Kangourou Competitions", desc: "Earned medals for Math, French, English." },
    ];
    const others = [
        { name: "Elinomathia", desc: "A2 certificate (2026)" },
        { name: "Piano Trinity Grades 1-7", desc: "All merit and above" },
        { name: "Piano Trinity Grade 8", desc: "Soon to finish" },
    ]

    return (
        <div className="education w-full min-h-120 h-fit max-w-full p-10 mb-10 scroll-mt-20" id="education">
            <div>
                <div className="py-10">
                    {/* <p className="text-md text-gray2">my</p> */}
                    <h1 className="text-6xl font-black tracking-tight">Education</h1>
                </div>
                <div>
                    <div className="igcse-section mb-10">
                        <div className="igcse-list mb-8 md:px-10">
                            <h1 className="mb-2 w-full text-4xl font-bold tracking-wide">
                                IGCSEs
                            </h1>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="border-b border-gray1">
                                        <th className="px-4 py-3 font-semibold">Subject</th>
                                        <th className="px-4 py-3 font-semibold">Score</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {igcses.map((subject) => (
                                        <tr key={subject.name} className="border-b border-gray1">
                                            <td className="px-4 py-3">{subject.name}</td>
                                            <td className="px-4 py-3">{subject.score}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="competitions-section mb-10">
                        <div className="competitions-list mb-8 md:px-10">
                            <h1 className="mb-2 w-full text-4xl font-bold tracking-wide">
                                Competitions
                            </h1>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="border-b border-gray1">
                                        <th className="px-4 py-3 font-semibold">Competition</th>
                                        <th className="px-4 py-3 font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {competitions.map((competition) => (
                                        <tr key={competition.name} className="border-b border-gray1">
                                            <td className="px-4 py-3">{competition.name}</td>
                                            <td className="px-4 py-3">{competition.desc}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="others-section mb-10">
                        <div className="others-list mb-8 md:px-10">
                            <h1 className="mb-2 w-full text-4xl font-bold tracking-wide">
                                Other Achievements
                            </h1>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="border-b border-gray1">
                                        <th className="px-4 py-3 font-semibold">Item</th>
                                        <th className="px-4 py-3 font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {others.map((item) => (
                                        <tr key={item.name} className="border-b border-gray1">
                                            <td className="px-4 py-3">{item.name}</td>
                                            <td className="px-4 py-3">{item.desc}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray2 text-sm mb-2">
                            If you are a school or another organisation and require proof of my IGCSE results, want more information about my academic achievements or have any other questions, please contact me.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}