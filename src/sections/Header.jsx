import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonNoP } from "../components/buttons";
import { useState } from "react";

import Animations from "../components/animations";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="header min-w-full h-25 sticky top-0 left-0 py-4 px-6 z-50">
            <div className={`rounded-2xl bg-black/20 flex justify-between items-center min-w-full min-h-full backdrop-blur-lg px-4 ${menuOpen && "rounded-b-none"}`}>
                <div className="title flex items-center">
                    <h1 className="text-xl font-bold">ivg1</h1>
                    <span className="text-xl">
                        &nbsp;|&nbsp;
                    </span>
                    <p className="font-bold flex items-center">Portfolio</p>
                </div>
                <div className="links gap-2 sm:flex hidden">
                    <a href="#home">
                        <Button option="blurredbg" color="default">
                            Home
                        </Button>
                    </a>
                    <a href="#projects">
                        <Button option="blurredbg" color="default">
                            Projects
                        </Button>
                    </a>
                    <a href="#skills">
                        <Button option="blurredbg" color="default">
                            Skills
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button option="blurredbg" color="default">
                            Contact
                        </Button>
                    </a>
                </div>
                <div className="links gap-2 sm:hidden flex">
                    <ButtonNoP color="default" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <span
                                className={`absolute w-6 h-0.5 bg-gray2 transition-all duration-300 ${
                                    menuOpen
                                        ? "rotate-45"
                                        : "-translate-y-2"
                                }`}
                            />

                            <span
                                className={`absolute w-6 h-0.5 bg-gray2 transition-all duration-300 ${
                                    menuOpen
                                        ? "opacity-0"
                                        : "opacity-100"
                                }`}
                            />

                            <span
                                className={`absolute w-6 h-0.5 bg-gray2 transition-all duration-300 ${
                                    menuOpen
                                        ? "-rotate-45"
                                        : "translate-y-2"
                                }`}
                            />
                        </div>
                    </ButtonNoP>
                    
                </div>
            </div>
            <div
                className={`sm:hidden overflow-hidden transition-all duration-400 ${
                    menuOpen
                        ? "max-h-fit opacity-100 bg-black/60 backdrop-blur-3xl rounded-b-2xl"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col p-3 items-center gap-2">
                    <a href="#home">
                        <Button option="" color="default" onClick={() => {setMenuOpen(!menuOpen)}}>
                            Home
                        </Button>
                    </a>
                    <a href="#projects">
                        <Button option="" color="default" onClick={() => {setMenuOpen(!menuOpen)}}>
                            Projects
                        </Button>
                    </a>
                    <a href="#skills">
                        <Button option="" color="default" onClick={() => {setMenuOpen(!menuOpen)}}>
                            Skills
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button option="" color="default" onClick={() => {setMenuOpen(!menuOpen)}}>
                            Contact
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}