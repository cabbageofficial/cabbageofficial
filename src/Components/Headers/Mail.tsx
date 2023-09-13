import Link from "next/link";

const Mail = () => {
    return (
        <div className="col-span-3">
            <Link href="mailto:info@cabbageweb.com" className="font-medium hover:text-secondary transition-all opacity-80">
                info@cabbageweb.com
            </Link>
        </div>
    );
};

export default Mail;