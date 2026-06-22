import { Link, useNavigate } from "react-router-dom";
import Button from "../components/buttons";

export default function Header() {
    return (
        <div className="header min-w-full h-25 sticky top-0 left-0 py-4 px-6 z-50">
            <div className="rounded-2xl bg-gray1/10 flex justify-between items-center min-w-full min-h-full border border-borderblack backdrop-blur-lg px-4">
                <div className="title flex items-center">
                    <h1 className="text-xl font-bold">ivg1</h1>
                    <span className="text-xl">
                        &nbsp;|&nbsp;
                    </span>
                    <p className="font-bold flex items-center">Portfolio</p>
                </div>
                <div className="links gap-2 hidden sm:flex">
                    <Button option="blurredbg" color="default" onClick={() => {
                        document.querySelector("#home")?.scrollIntoView({
                            behavior: "smooth" 
                        }); 
                    }}
                    >
                        Home
                    </Button>
                    <Button option="blurredbg" color="default" onClick={() => {
                        document.querySelector("#projects")?.scrollIntoView({
                            behavior: "smooth" 
                        }); 
                    }}
                    >
                        Projects
                    </Button>
                    <Button option="blurredbg" color="default" onClick={() => {
                        document.querySelector("#skills")?.scrollIntoView({
                            behavior: "smooth" 
                        }); 
                    }}
                    >
                        Skills
                    </Button>
                </div>
            </div>
        </div>
    )
}