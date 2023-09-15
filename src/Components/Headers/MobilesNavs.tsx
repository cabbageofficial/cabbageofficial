"use client"

import { Link as ScrollLink } from "react-scroll/modules";

//Data
const data = [
    { name: "Home", id: "home" },
    { name: "About-us", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" }
]

const MobileNavs = () => {
    return (
        <ul className="text-left p-5">
            {data.map((item, i) => (
                <li key={i} className="my-4">
                    <ScrollLink
                        to={item.id}
                        className="p-1.5 naves cursor-pointer font-medium transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] relative after:w-[0px] after:transition-all after:duration-200 after:ease-[cubic-bezier(0.4, 0, 0.2, 1)]  after:h-[2px] after:bg-secondary after:absolute after:left-1.5 after:top-full hover:text-black hover:after:w-[calc(100%_-_11px)] active:text-secondary"
                        activeClass="active"
                        smooth={true}
                        offset={-65}
                        duration={400}
                        spy={true}
                    >
                        {item.name}
                    </ScrollLink>
                </li>
            ))}
        </ul>
    );
};

export default MobileNavs;