"use client"

import { useState, useEffect } from "react";

//Components
import Container from "../Common/Container";
import Contact from "./Contact";
import Logo from "./Logo";
import Mail from "./Mail";
import Navs from "./Navs";

const Floating = () => {
    //State
    const [isScrolled, setIsScrolled] = useState(false);

    //Lifecycle Hook
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container className={`grid grid-cols-12 items-center fixed top-0 left-0 right-0 bg-[#ffffffdb] z-50 shadow-3xl before:w-full before:h-full before:absolute before:backdrop-saturate-[180%] before:backdrop-blur-[5px] before:top-0 before:-z-10 transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${isScrolled ? "translate-y-0" : "-translate-y-[100%]"}`}>
            <Logo />
            <Mail />
            <Navs />
            <Contact />
        </Container>
    );
};

export default Floating;