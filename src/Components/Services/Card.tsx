import Image from "next/image";

//Components
const data = [
    {
        name1: "Web App",
        name2: "Development",
        description: "We specialize in creating custom web applications tailored to your unique needs and requirements.",
        icon: "/services/service-icon1.png"
    },
    {
        name1: "Backend",
        name2: "Development",
        description: "Our backend development services cover everything from database design to server-side logic.",
        icon: "/services/service-icon2.png"
    },
    {
        name1: "Deployment",
        name2: "Services",
        description: "We take care of deploying your web applications to production environments securely and efficiently.",
        icon: "/services/service-icon3.png"
    }
];

const Card = () => {
    return (
        <div className="grid grid-cols-3 gap-8 mt-20">
            {data.map((item, i) => (
                <div key={i} className="bg-neutral-100 rounded-md overflow-hidden py-5 px-6 after:w-[200px] group relative after:h-[200px] after:bg-secondary after:absolute after:rounded-full after:-top-20 after:-right-20 after:translate-x-[50%] after:transition-all after:duration-200 after:ease-[cubic-bezier(0.4, 0, 0.2, 1)] after:-translate-y-[50%]  hover:after:translate-x-0 hover:after:translate-y-0">
                    <Image src={item.icon} alt={item.name1} width={116} height={102} className="transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:scale-105" />
                    <h4 className="text-xl font-bold mt-5">{item.name1} <span className="text-secondary">{item.name2}</span></h4>
                    <p className="text-base mt-2 opacity-90">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;