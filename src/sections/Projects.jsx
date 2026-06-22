import Button from "../components/buttons";

export default function Projects() {
    const projects = [
        {
            title: "The Heritage Market",
            description: "A platform I developed to make it easier for students to buy/sell school stuff. My first full-stack project.",
            imgUrl: "/images/heritageMarketThumbnail.png",
            
            hasWebsite: true,
            websiteLink: "https://hpsm.run.place",

            hasRepo: true,
            repoLink: "https://github.com/ivg1/theHeritageMarket"

        },
        {
            title: "Portfolio",
            description: "It is what you're looking at right now, made to tell about me, and showcase my projects & skills.",
            imgUrl: "/images/portfolioThumbnail.png",
            
            hasWebsite: false,
            websiteLink: "",

            hasRepo: true,
            repoLink: "https://github.com/ivg1/portfolio"

        },
        {
            title: "Diy hackpad",
            description: "One of my favorite hardware projects.\nI still remember how long it took to find the correct MicroPython firmware for usb stuff.",
            imgUrl: "/images/diyHackpadThumbnail.png",

            hasWebsite: false,
            websiteLink: "",

            hasRepo: true,
            repoLink: "https://github.com/ivg1/my_hackpad"

        },
        {
            title: "Stylophone",
            description: "My take on making a stylophone using an arduino uno and other parts such as the sdcard reader and touch sensors.",
            imgUrl: "/images/stylophoneThumbnail.png",

            hasWebsite: false,
            websiteLink: "",

            hasRepo: true,
            repoLink: "https://github.com/ivg1/arduino_stylophone"

        },

    ]

    return (
        <div className="projects w-full h-fit mb-10 max-w-full p-10">
            <div>
                <p className="text-md text-gray2">check out some of my</p>
                <h1 className="text-6xl font-black tracking-tight">Projects</h1>
                <div className="projects-list my-10 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
                    {projects.map((project, i) => (
                        <div className="project-item h-fit rounded-2xl border border-gray1 bg-black/20 backdrop-blur-3xl flex flex-col overflow-clip" key={i}>
                            <div className="flex items-center justify-center w-full relative h-40 z-1 overflow-clip">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <img src={project.imgUrl} className="w-full h-full object-cover object-top" />
                                </div>
                            </div>
                            <div className="p-4 z-3 ">

                                <div>
                                    <h1 className="text-3xl font-bold tracking-wider mb-2">{project.title}</h1>
                                    <p className="whitespace-pre-line">{project.description}</p>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    {project.hasWebsite && (
                                        <Button option="solidbgRed" link={project.websiteLink}>
                                            Visit 
                                            <svg className="size-4.5 ml-2 align-middle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24" style={{ color: "rgb(255, 255, 255)"}}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"></path></svg>
                                        </Button>
                                    )}
                                    {project.hasRepo && (
                                        <Button option="blurredbg" color="grayBorder" link={project.repoLink}>
                                            Repo 
                                            <svg className="size-4.5 ml-2 align-middle w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                                            </svg>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-lg text-gray2">See the rest of my projects in my <a href="https://github.com/ivg1" target="_blank" className="text-red-500 hover:underline">Github</a></p>
            </div>
        </div>
    )
}