import { useState } from "react";;
import "./App.css";

//header & footer
import Header from "./components/Header";

//pages
import FirstSee from "./sections/FirstSee";
import Projects from "./sections/Projects";

//effects
import CursorBackground from "./components/effects/CursorBackground";

function App() {
	return (
		<div className="">
			<CursorBackground />
			<Header />
			<FirstSee />
			<Projects />
			<div className="md:px-[15%]">

			</div>
		</div>
	)
}

export default App
