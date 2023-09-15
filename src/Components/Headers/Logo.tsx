import Image from "next/image";

const Logo = () => {
    return (
        <div className="col-span-2 lg:col-span-2 xxs:col-span-1 xxs:max-msm:-ml-3">
            <Image src="/logo.png" alt="Logo" width={400} height={400} className="w-[65px]" />
        </div>
    );
};

export default Logo;