//Components
import Icons from "../Common/Icons";

//Data
const data = [
    { icon: "teenyicons:nodejs-solid", name: "Nodejs", progress: "90%", color: "group-hover:text-[#026e00ff]" },
    { icon: "akar-icons:nextjs-fill", name: "Nextjs", progress: "98%", color: "group-hover:text-[#000000ff]" },
    { icon: "file-icons:nestjs", name: "Nestjs", progress: "98%", color: "group-hover:text-[#ea2845ff]" },
    { icon: "simple-icons:typescript", name: "Typescript", progress: "95%", color: "group-hover:text-[#3178c6ff]" },
    { icon: "bxl:tailwind-css", name: "Tailwind", progress: "100%", color: "group-hover:text-[#38bdf8ff]" },
    { icon: "simple-icons:python", name: "Python", progress: "30%", color: "group-hover:text-[#366c9cff]" },
    { icon: "la:aws", name: "AWS", progress: "87%", color: "group-hover:text-[#ff9900ff]" },
]

const Skill = () => {
    return (
        <div className="grid grid-cols-7 lg-max:grid-cols-7 lg:grid-cols-5 lsm:grid-cols-4 msm:grid-cols-3 sm:grid-cols-3 xxs:grid-cols-2 gap-5 py-24">
            {data.map((item, i) => (
                <div className="text-center px-10 md:px-10 lsm:px-5 xxs:px-1 rounded-[80px] py-16 bg-neutral-100 cursor-pointer group hover:bg-white" key={i}>
                    <Icons className={`text-7xl md:text-7xl lsm:text-5xl xxs:text-6xl mx-auto ${item.color}`} icon={item.icon} />
                    <h4 className="text-xl mt-3 font-bold">{item.progress}</h4>
                    <p className="text-lg font-medium mt-2">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Skill;