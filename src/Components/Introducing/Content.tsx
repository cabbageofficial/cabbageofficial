import Image from "next/image";
import Link from "next/link";

const Content = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-2 xxs:grid-cols-1 gap-12 lg:gap-12 xxs:gap-0 xxs:max-lg:gap-y-16 mt-16">
            <div className="">
                <Image src="/cababgetube.png" alt="Cabbage Tube" width={2870} height={1406} className="w-[200px] -ml-5" />
                <h4 className="text-xl font-bold mb-2">Cabbage <span className="text-secondary">Youtube Channel</span></h4>
                <p className="opacity-90 mb-6">Welcome to Cabbage Tube, your go-to destination for captivating and informative video tutorials. We believe that learning should be engaging and accessible, which is why our channel is dedicated to providing you with high-quality tutorials that cover a wide range of topics.</p>
                <Link href="https://www.youtube.com/@cabbagetube24" className="bg-secondary py-2 px-3 rounded-md text-white uppercase text-xs font-semibold transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-main" target="_blank">
                    Visit Channel
                </Link>
            </div>
            <div className="">
                <Image src="/me.png" alt="Cabbage Tube" width={600} height={600} className="w-[98px]" />
                <h4 className="text-xl font-bold mb-2">Siam Ahnaf <span className="text-sm text-secondary">Founder</span></h4>
                <p className="opacity-90 mb-6">Meet Siam Ahnaf, the visionary behind Cabbage. As a seasoned full-stack web developer and the founder of our channel, Siam brings a wealth of knowledge and expertise to the world of web development and technology. With a passion for creating innovative solutions and sharing knowledge.</p>
                <Link href="https://www.siamahnaf.com/" className="bg-secondary py-2 px-3 rounded-md text-white uppercase text-xs font-semibold transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-main" target="_blank">
                    Visit Profile
                </Link>
            </div>
        </div>
    );
};

export default Content;