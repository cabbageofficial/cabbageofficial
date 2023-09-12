import Image from "next/image";

//Components
import Container from "@/Components/Common/Container";

//Image
const data = [
    { image: "/company/client-1-hover.png", name: "client-1", hover: "/company/client-1.png" },
    { image: "/company/client-2-hover.png", name: "client-2", hover: "/company/client-2.png" },
    { image: "/company/client-3-hover.png", name: "client-3", hover: "/company/client-3.png" },
    { image: "/company/client-4-hover.png", name: "client-4", hover: "/company/client-4.png" },
    { image: "/company/client-5-hover.png", name: "client-5", hover: "/company/client-5.png" },
    { image: "/company/client-6-hover.png", name: "client-6", hover: "/company/client-6.png" },
    { image: "/company/client-7-hover.png", name: "client-7", hover: "/company/client-7.png" },
    { image: "/company/client-8-hover.png", name: "client-8", hover: "/company/client-8.png" },
    { image: "/company/client-9-hover.png", name: "client-9", hover: "/company/client-9.png" },
    { image: "/company/client-10-hover.png", name: "client-10", hover: "/company/client-10.png" },
    { image: "/company/client-11-hover.png", name: "client-11", hover: "/company/client-11.png" },
    { image: "/company/client-12-hover.png", name: "client-11", hover: "/company/client-12.png" }
]

const Company = () => {
    return (
        <section>
            <Container className="pb-24 pt-8">
                <ul className="grid grid-cols-6 gap-x-6 gap-y-12">
                    {data.map((item, i) => (
                        <li key={i} className="relative group cursor-pointer select-none">
                            <Image src={item.image} alt={item.name} width={172} height={76} className={`w-[120px] ${(i % 2 === 1 && i < 6) ? "opacity-30" : ""} ${(i % 2 === 0 && i > 5) ? "opacity-30" : ""} mx-auto group-hover:opacity-0 group-hover:invisible`} />
                            <Image src={item.hover} alt={item.name} width={172} height={76} className="w-[120px] mx-auto absolute left-0 top-0 bottom-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible" />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Company;