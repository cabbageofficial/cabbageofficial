import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import getMediumFeed from "@beskar-labs/medium-feed";

const Card = async () => {
    //Getting Medium Feed
    const blogs = await getMediumFeed({
        username: "cabbageweb",
        url: "https://medium.com/feed/",
    });

    return (
        <div className="mt-16 grid grid-cols-3 lg:grid-cols-3 lsm:grid-cols-2 xxs:grid-cols-1 gap-6">
            {blogs.map((item, i) => (
                <div key={i}>
                    {item.image &&
                        <Image src={item.image} alt={item.title} width={820} height={462} priority className="w-full rounded-md" />
                    }
                    <div className="flex my-1.5">
                        <div className="flex-1 flex gap-x-2 items-center">
                            <span>by</span>
                            <span className="text-secondary">Cabbage web</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="mt-px">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm11-5a1 1 0 1 0-2 0v3.764a3 3 0 0 0 1.658 2.683l2.895 1.447a1 1 0 1 0 .894-1.788l-2.894-1.448a1 1 0 0 1-.553-.894V7z" clipRule="evenodd" /></svg>
                            </span>
                            <span>
                                {moment(item.date).format("MMM DD")}
                            </span>
                        </div>
                    </div>
                    <h4 className="text-xl font-bold mt-2.5 mb-4">{item.title}</h4>
                    <Link href={item.link} className="flex gap-2 items-center bg-secondary text-white py-1.5 px-4 w-max rounded-md">
                        <span>Read Blog</span>
                        <span className="mt-px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path fill="currentColor" d="M180.5 74.262C80.813 74.262 0 155.633 0 256s80.819 181.738 180.5 181.738S361 356.373 361 256S280.191 74.262 180.5 74.262Zm288.25 10.646c-49.845 0-90.245 76.619-90.245 171.095s40.406 171.1 90.251 171.1s90.251-76.619 90.251-171.1H559c0-94.503-40.4-171.095-90.248-171.095Zm139.506 17.821c-17.526 0-31.735 68.628-31.735 153.274s14.2 153.274 31.735 153.274S640 340.631 640 256c0-84.649-14.215-153.271-31.742-153.271Z" /></svg>
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Card;