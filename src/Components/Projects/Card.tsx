import Image from "next/image";
import Link from "next/link";

//Data
const data = [
    {
        image: "/projects/project-final-1.png",
        name: "Creative custom online e-commerce website",
        type: "E-commerce, Nekmart",
        url: "https://nekmart.com/",
        width: 940,
        height: 1140
    },
    {
        image: "/projects/project-final-2.png",
        name: "A nextjs e-commerce frontend template",
        type: "E-commerce, Ebuy",
        url: "https://ebuy.cabbageweb.com/",
        width: 1200,
        height: 1140
    },
    {
        image: "/projects/project-final-3.png",
        name: "A movies and book collection website!",
        type: "Entertainment, Flimybook",
        url: "https://flimybook.siamahnaf.com/",
        width: 1540,
        height: 1140
    },
    {
        image: "/projects/project-final-4.png",
        name: "A online greetings booking website!",
        type: "Real estate, We do greetings",
        url: "https://www.wedogreetings.co.uk/",
        width: 940,
        height: 1140
    },
    {
        image: "/projects/project-final-5.png",
        name: "A progressive blog and news site!",
        type: "Blog & News, Siam's blog",
        url: "https://blog.siamahnaf.com/",
        width: 1200,
        height: 1140
    },
    {
        image: "/projects/project-final-6.png",
        name: "Creative & professional school portfolio.",
        type: "Portfolio, E-campus",
        url: "https://ecampus.cabbageweb.com/",
        width: 1540,
        height: 1140
    }
]

const Card = () => {
    return (
        <div className="mt-16">
            <div className="w-[80%] lg:w-[80%] xxs:w-full mx-auto grid grid-cols-2 sm:grid-cols-2 xxs:grid-cols-1 gap-x-16 gap-y-16 md:gap-y-16 lsm:gap-y-8 md:gap-x-16 lsm:gap-x-8 msm:gap-x-8 msm:gap-y-8 sm:gap-y-6 sm:gap-x-6 xxs:gap-x-0 xxs:gap-y-8 items-end">
                {data.map((item, i) => (
                    <div key={i} className={`${i === 2 || (i > 2 && (i - 2) % 3 === 0) ? "col-span-2 sm:col-span-2 xxs:col-span-1 w-[70%] sm:w-[70%] xxs:w-full mx-auto" : 'xxs:max-sm:col-span-1'
                        } border-b border-solid border-gray-100`}>
                        <Link href={item.url} className="group overflow-hidden block">
                            <Image src={item.image} alt={item.name} width={item.width} height={item.height} className="w-full transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:scale-105" />
                            <div className="px-2 py-3">
                                <p className="text-sm">{item.type}</p>
                                <h4 className="text-lg sm:text-lg xxs:text-base font-bold">{item.name}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link href="https://github.com/orgs/cabbgeweb/repositories" target="_blank" className="border border-solid border-secondary rounded py-1.5 px-3 bg-secondary transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] text-white font-medium hover:border-main hover:text-main hover:bg-transparent">
                    Explore More
                </Link>
            </div>
        </div>
    );
};

export default Card;