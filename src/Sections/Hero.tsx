import Image from "next/image";

//Components
import Container from "@/Components/Common/Container";
import Button from "@/Components/Home/Button";
import Icons from "@/Components/Common/Icons";

const Hero = () => {
    return (
        <section>
            <Container>
                <div className="grid grid-cols-12 gap-6 items-end">
                    <div className="col-span-5 mb-24">
                        <h6 className="text-lg font-semibold mb-3"><span className="text-secondary">Hi!</span> there, we&apos;re</h6>
                        <h2 className="text-6xl font-bold mb-4">We Have Design Experience UX/UI.</h2>
                        <p className="font-medium relative after:w-[3px] after:bg-secondary after:absolute after:left-0 after:top-1.5 after:bottom-1.5 pl-2.5 mb-8">
                            Where an idea turns into a project. Help your startups, business, and ideas to grow more and solve the problem with the power of code.
                        </p>
                        <Button />
                    </div>
                    <div className="col-span-7 relative">
                        <Image src="/hero-vec.png" alt="Vector" width={2000} height={2000} />
                        <div className="absolute bottom-[18%] right-[17%] cursor-pointer select-none">
                            <Icons className="text-3xl" icon="solar:play-bold" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;