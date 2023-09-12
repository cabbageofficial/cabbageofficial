import Image from "next/image";
import Link from "next/link";

//Component
import Container from "../Common/Container";

//Data
const data = [
    {
        image: "/projects/project-1.jpg",
        name: "Creative & digital web design studio.",
        type: "Magazine, Photography",
    },
    {
        image: "/projects/project-2.jpg",
        name: "Creative & digital web design studio.",
        type: "Magazine, Photography"
    },
    {
        image: "/projects/project-3.jpg",
        name: "Creative & digital web design studio.",
        type: "Magazine, Photography"
    },
    {
        image: "/projects/project-10.jpg",
        name: "Creative & digital web design studio.",
        type: "Magazine, Photography"
    },
    {
        image: "/projects/project-11.jpg",
        name: "Creative & digital web design studio.",
        type: "Magazine, Photography"
    },
    {
        image: "/projects/project-12.jpg",
        name: "Creative & digital web design studio.",
        type: "Magazine, Photography"
    }
]

const Card = () => {
    return (
        <div className="mt-16">
            <div className="w-[80%] mx-auto grid grid-cols-2 gap-x-16 gap-y-16 items-end">
                {data.map((item, i) => (
                    <div key={i} className={`${i === 2 || (i > 2 && (i - 2) % 3 === 0) ? "col-span-2 w-[70%] mx-auto" : ''
                        } border-b border-solid border-gray-100`}>
                        <Link href="/" className="group overflow-hidden block">
                            <Image src={item.image} alt={item.name} width={470} height={570} className="w-full transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:scale-105" />
                            <div className="px-2 py-3">
                                <p className="text-sm">{item.type}</p>
                                <h4 className="text-lg font-bold">{item.name}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;