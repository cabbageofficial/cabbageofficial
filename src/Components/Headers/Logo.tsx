import Image from "next/image";

const Logo = () => {
    return (
        <div className="col-span-2">
            <Image src="/logo.png" alt="Logo" width={400} height={400} className="w-[65px]" />
        </div>
    );
};

export default Logo;