import Link from "next/link";

//Components
import Logo from "./Logo";
import MobileNavs from "./MobilesNavs";
import Icons from "../Common/Icons";

//Data
const data = [
    { icon: "ri:github-fill", url: "https://github.com/cabbgeweb" },
    { icon: "simple-icons:npm", url: "https://github.com/cabbgeweb" },
    { icon: "ri:linkedin-fill", url: "https://www.linkedin.com/in/cabbageweb/" },
    { icon: "basil:facebook-solid", url: "https://www.facebook.com/cabbageweb/" },
    { icon: "mdi:whatsapp", url: "https://wa.me/message/UAXIYNES562EN1" }
]

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
}

const Drawer = ({ open, onClose }: Props) => {
    return (
        <div>
            <div className={`w-[300px] sm:w-[300px] xs:w-[250px] xxs:w-[200px] bg-white fixed left-0 top-0 h-screen z-[60] transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-5">
                    <Logo />
                </div>
                <MobileNavs />
                <ul className="flex bg-main text-white absolute bottom-0 w-full">
                    {data.map((item, i) => (
                        <Link className={`flex-1 py-3 block justify-center items-center ${data.length - 1 !== i ? "border-r border-solid border-white border-opacity-20" : ""}`} href={item.url} key={i}>
                            <Icons className="mx-auto text-xl" icon={item.icon} />
                        </Link>
                    ))}
                </ul>
            </div>
            <div className={`bg-black bg-opacity-25 transition-all ease-linear fixed left-0 top-0 w-full h-screen z-[55] ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={onClose} />
        </div>
    );
};

export default Drawer;