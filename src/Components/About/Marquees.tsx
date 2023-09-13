import Marquee from "react-fast-marquee"

//Data
const data = [
    "Crafting Stunning Web Experiences",
    "Mastering Typescript Magic",
    "JavaScript Sorcery in Action",
    "Node.js Wizardry",
    "React.js Artistry",
    "Next.js Innovation",
    "Nest.js Craftsmanship",
    "Express.js Expertise",
    "Unlocking GraphQL Potential",
    "Designing Engaging User Experiences",
    "                  "
];


const Marquees = () => {
    return (
        <div className="bg-main py-6 text-white">
            <Marquee
                pauseOnHover
                autoFill
            >
                <div className="flex gap-10">
                    {data.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Marquees;