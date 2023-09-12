import Link from "next/link";

//Icons
import Icons from "../Common/Icons";

//Data
const data = [
    { icon: "ri:github-fill", url: "https://github.com/cabbgeweb" },
    { icon: "ri:linkedin-fill", url: "https://www.linkedin.com/in/cabbageweb/" },
    { icon: "basil:facebook-solid", url: "https://www.facebook.com/cabbageweb/" },
    { icon: "mdi:whatsapp", url: "https://wa.me/message/UAXIYNES562EN1" },
]

const Socials = () => {
    return (
        <div className="flex justify-center gap-2 mt-4">
            {data.map((item, i) => (
                <Link href={item.url} className="bg-secondary text-white w-[35px] h-[35px] rounded-full flex justify-center items-center">
                    <Icons className="text-lg" icon={item.icon} />
                </Link>
            ))}
        </div>
    );
};

export default Socials;