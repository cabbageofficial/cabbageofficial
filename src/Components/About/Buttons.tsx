"use client"

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll/modules";

const Buttons = () => {
    return (
        <div className="flex gap-3 mt-8">
            <Link href="https://wa.me/message/UAXIYNES562EN1" className="bg-secondary uppercase transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] py-1.5 px-5 rounded text-white block text-sm font-semibold hover:bg-main">
                Hire Us
            </Link>
            <ScrollLink
                to="portfolio"
                className="cursor-pointer text-sm border transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] border-solid border-secondary rounded uppercase font-semibold py-1.5 px-5 hover:border-main"
                smooth={true}
                offset={-65}
                duration={400}
                spy={true}
            >
                See Project
            </ScrollLink>
        </div>
    );
};

export default Buttons;