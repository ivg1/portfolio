import { useEffect } from "react";
import "./CursorBackground.css";

export default function CursorBackground() {
    const enableMouseEffect =
        window.matchMedia("(pointer: fine)").matches &&
        window.matchMedia("(hover: hover)").matches;

    useEffect(() => {
        if (!enableMouseEffect) return;

        const bgThing = document.querySelector(".blurred-bg");
        let mouseX = 0;
        let mouseY = 0;
        let x = 0;
        let y = 0;

        const handleMove = (e) => {
            mouseX = e.clientX - 100;
            mouseY = e.clientY - 100;
        };

        const update = () => {
            x += (mouseX - x) / 10;
            y += (mouseY - y) / 10;

            bgThing.style.left = `${x}px`;
            bgThing.style.top = `${y}px`;

            requestAnimationFrame(update);
        };

        window.addEventListener("pointermove", handleMove);
        update();

        return () => {
            window.removeEventListener("pointermove", handleMove);
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 -z-1">
            <div className="blurred-bg"></div>
        </div>
    );
}