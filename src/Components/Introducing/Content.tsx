import Image from "next/image";
import Link from "next/link";

const Content = () => {
    return (
        <div className="grid grid-cols-2 gap-12 mt-16">
            <div className="">
                <Image src="/cababgetube.png" alt="Cabbage Tube" width={2870} height={1406} className="w-[200px] -ml-5" />
                <h4 className="text-xl font-bold mb-2">Cabbage <span className="text-secondary">Youtube Channel</span></h4>
                <p className="opacity-90 mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>
                <Link href="https://www.youtube.com/@cabbageweb198" className="bg-secondary py-2 px-3 rounded-md text-white uppercase text-xs font-semibold transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-main">
                    Visit Channel
                </Link>
            </div>
            <div className="">
                <Image src="/me.png" alt="Cabbage Tube" width={600} height={600} className="w-[104px]" />
                <h4 className="text-xl font-bold">Siam Ahnaf <span className="text-sm text-secondary mb-2">Founder</span></h4>
                <p className="opacity-90 mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>
                <Link href="https://www.siamahnaf.com/" className="bg-secondary py-2 px-3 rounded-md text-white uppercase text-xs font-semibold transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-main">
                    Visit Profile
                </Link>
            </div>
        </div>
    );
};

export default Content;