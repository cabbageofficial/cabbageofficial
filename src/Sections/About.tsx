//Components
import Container from "@/Components/Common/Container";
import Marquees from "@/Components/About/Marquees";
import Socials from "@/Components/About/Socials";
import Icons from "@/Components/Common/Icons";
import Buttons from "@/Components/About/Buttons";

//Data
const data = [
    "100% client satisfaction",
    "Quality Service",
    "Lifetime aftersales supports"
]

const About = () => {
    return (
        <section id="about">
            <Marquees />
            <Container className="py-16">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <h4 className="text-4xl font-bold mb-2">About <span className="text-secondary">Us</span></h4>
                        <p className="text-base">
                            In the ever-evolving digital realm, where pixels paint the canvas of possibility, we sculpt immersive web experiences that captivate, innovate, and resonate.
                        </p>
                        <ul className="mt-4">
                            {data.map((item, i) => (
                                <li key={i} className="flex gap-2 items-center my-1">
                                    <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-secondary p-px text-white">
                                        <Icons icon="typcn:tick" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Buttons />
                    </div>
                    <div className="text-center">
                        <div className="bg-white w-max mx-auto px-8 py-6 rounded-md">
                            <h4 className="text-5xl font-bold mb-2">Cabbage</h4>
                            <p className="text-base">A agency for developed and Sharing</p>
                            <Socials />
                        </div>
                        <p className="bg-secondary bg-opacity-20 p-4 rounded-md border border-solid border-secondary border-opacity-30 w-[65%] mx-auto">“The harmony of code and design, the symphony of technology and creativity”</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;