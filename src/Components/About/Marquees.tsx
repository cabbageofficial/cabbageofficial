import Marquee from "react-fast-marquee"

//Data
const data = [
    "Website Design",
    "Front-end Development",
    "Back-end Development",
    "E-commerce Solutions",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Content Creation",
    "SEO Optimization",
    "Graphic Design",
];


const Marquees = () => {
    return (
        <div className="bg-main py-6 text-white">
            <Marquee
                pauseOnHover
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