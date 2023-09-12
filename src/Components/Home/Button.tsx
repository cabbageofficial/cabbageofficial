"use client"

import { Link as ScrollLink } from "react-scroll/modules";

const Button = () => {
    return (
        <div>
            <ScrollLink
                to={"portfolio"}
                className="bg-secondary py-2 px-5 rounded transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] font-semibold uppercase text-white text-sm cursor-pointer hover:bg-main"
                smooth={true}
                offset={-65}
                duration={400}
                spy={true}
            >
                See Projects
            </ScrollLink>
        </div>
    );
};

export default Button;