import Link from "next/link";

const Contact = () => {
    return (
        <div className="col-span-2 text-right">
            <Link
                href="https://wa.me/message/UAXIYNES562EN1"
                className="bg-red-transparent bg-secondary rounded transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] py-1.5 px-4 font-semibold cursor-pointer hover:bg-main text-white"
                target="_blank"
            >
                Let's Talk
            </Link>
        </div>
    );
};

export default Contact;