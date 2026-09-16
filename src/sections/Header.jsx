import "./Header.css"
import React, { useEffect, useRef, useState } from "react"

export default function Header({ alwaysShow = true }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const headerRef = useRef(null)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    // Close menu when clicking/tapping outside the header + menu
    useEffect(() => {
        if (!menuOpen) return

        const handleOutsideClick = (event) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target)
            ) {
                closeMenu()
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)
        document.addEventListener("touchstart", handleOutsideClick)

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
            document.removeEventListener("touchstart", handleOutsideClick)
        }
    }, [menuOpen])

    return (
        <header
            ref={headerRef}
            className={`header ${alwaysShow ? "always-show" : ""} ${
                menuOpen ? "menu-open" : ""
            }`}
        >
            <div className="header-left">
                <div className="header-logo">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width="70"
                        height="70"
                        draggable={false}
                        className="rounded-full"
                    />
                </div>
            </div>

            <div className="header-right">
                {/* Desktop navigation */}
                <div className="header-links">
                    <div className="header-link">
                        <a href="/#home">
                            Home
                            <span className="text-gray-500 header-link-arrow">
                                {" />"}
                            </span>
                        </a>
                    </div>

                    <div className="header-link">
                        <a href="/#projects">
                            Projects
                            <span className="text-gray-500 header-link-arrow">
                                {" />"}
                            </span>
                        </a>
                    </div>

                    <div className="header-link">
                        <a href="/#skills">
                            Skills
                            <span className="text-gray-500 header-link-arrow">
                                {" />"}
                            </span>
                        </a>
                    </div>

                    <div className="header-link">
                        <a href="/#contact">
                            Contact
                            <span className="text-gray-500 header-link-arrow">
                                {" />"}
                            </span>
                        </a>
                    </div>

                    <div className="header-link">
                        <a href="/blog">
                            Blog
                            <span className="text-gray-500 header-link-arrow">
                                {" />"}
                            </span>
                        </a>
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className={menuOpen ? "open" : ""}></span>
                    <span className={menuOpen ? "open" : ""}></span>
                    <span className={menuOpen ? "open" : ""}></span>
                </button>
            </div>

            {/* Mobile dropdown */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <div className="mobile-menu-links">
                    <a href="/#home" onClick={closeMenu}>
                        Home
                        <span className="text-gray-500 header-link-arrow">
                            {" />"}
                        </span>
                    </a>

                    <a href="/#projects" onClick={closeMenu}>
                        Projects
                        <span className="text-gray-500 header-link-arrow">
                            {" />"}
                        </span>
                    </a>

                    <a href="/#skills" onClick={closeMenu}>
                        Skills
                        <span className="text-gray-500 header-link-arrow">
                            {" />"}
                        </span>
                    </a>

                    <a href="/#contact" onClick={closeMenu}>
                        Contact
                        <span className="text-gray-500 header-link-arrow">
                            {" />"}
                        </span>
                    </a>

                    <a href="/blog" onClick={closeMenu}>
                        Blog
                        <span className="text-gray-500 header-link-arrow">
                            {" />"}
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}