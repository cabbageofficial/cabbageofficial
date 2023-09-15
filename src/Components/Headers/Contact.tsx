import Link from "next/link";

//Components
import MobileBer from "./MobileBer";

const Contact = () => {
    return (
        <div className="col-span-2 lg:col-span-2 xxs:col-span-2 text-right">
            <div className="flex justify-end items-center gap-2">
                <Link
                    href="https://wa.me/message/UAXIYNES562EN1"
                    className="bg-red-transparent bg-secondary rounded transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] py-1.5 px-4 font-semibold cursor-pointer hover:bg-main text-white"
                    target="_blank"
                >
                    Let&apos;s Talk
                </Link>
                <MobileBer />
            </div>
        </div>
    );
};

export default Contact;