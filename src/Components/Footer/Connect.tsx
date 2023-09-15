import Link from "next/link";

//Icons
import Icons from "../Common/Icons";

//Data
const data = [
    { icon: "icomoon-free:whatsapp", name: "What's app", url: "https://wa.me/message/UAXIYNES562EN1", hover: "group-hover:bg-[#25d366ff]" },
    { icon: "mingcute:github-line", name: "Github", url: "https://github.com/cabbgeweb", hover: "group-hover:bg-[#24292fff]" },
    { icon: "ri:linkedin-fill", name: "Linked In", url: "https://www.linkedin.com/in/cabbageweb/", hover: "group-hover:bg-[#0a66c2ff]" },
    { icon: "fa6-brands:x-twitter", name: "Twitter", url: "https://twitter.com/cabbageweb", hover: "group-hover:bg-[#1da1f2ff]" },
    { icon: "ri:facebook-fill", name: "Facebook", url: "https://www.facebook.com/cabbageweb/", hover: "group-hover:bg-[#4867aaff]" },
    { icon: "mingcute:youtube-fill", name: "Youtube", url: "https://www.youtube.com/@cabbageweb198", hover: "group-hover:bg-[#ff0000ff]" }
]

const Connect = () => {
    return (
        <div className="col-span-4 md:col-span-4 xxs:col-span-1">
            <h4 className="text-xl font-bold">Let&apos;s <span className="text-secondary">Connect</span></h4>
            <ul className="mt-10 md:mt-10 xxs:mt-4 xxs:max-md:flex xs:max-md:gap-6 xxs:max-xs:flex-wrap xxs:max-xs:gap-4">
                {data.map((item, i) => (
                    <li className="my-3.5" key={i}>
                        <Link href={item.url} className="flex gap-2 items-center group w-max">
                            <div className={`flex justify-center items-center w-[30px] h-[30px] rounded-md bg-main text-white transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] group-hover:bg-secondary`}>
                                <Icons className="text-lg" icon={item.icon} />
                            </div>
                            <h4 className="xxs:max-md:hidden">{item.name}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Connect;