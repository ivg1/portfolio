import { useState, useEffect } from "react";

export default function Terminal({ text, extra, speed = 120 }) {
    const [output, setOutput] = useState("");
    const [active, setActive] = useState(true);

    useEffect(() => {
        let i = 0;
        setOutput("");

        const interval = setInterval(() => {
            setOutput(text.slice(0, i));
            i++;

            if (i > text.length) {
                const timeout = setTimeout(() => {
                    setActive(false);
                    clearInterval(interval);
                }, 400);
            }
        }, speed);

        return () => {
            clearInterval(interval);
        }
    }, [text, speed]);

    return (
        <div className="terminal">
            <div className="flex h-fit">
                <div className="font-bold">
                    <span className="text-green-500">ivg1:</span>
                    <span className="text-blue-600">~ $</span>
                    &nbsp;
                </div>

                <span className="flex items-center text-lg">
                    {output}
                    {active && (
                        <span className="inline-block w-0.5 h-5 rounded-sm bg-warmwhite ml-1 animate-caret-blink" />
                    )}
                </span>
            </div>
            {!active && (
                <>
                    <div className="flex flex-col">
                        {extra.map((extra_line, i) => (
                            <span className="flex items-center text-lg" key={i}>{extra_line}</span>
                        ))}
                    </div>
                    <div className="flex h-fit">
                        <div className="font-bold">
                            <span className="text-green-500">ivg1:</span>
                            <span className="text-blue-600">~ $</span>
                            &nbsp;
                        </div>
                        <span className="flex items-center text-lg">
                            <span className="inline-block w-0.5 h-5 rounded-sm bg-warmwhite ml-1 animate-caret-blink" />
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}