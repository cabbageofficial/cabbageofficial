import Image from "next/image";

//Components
import Container from "@/Components/Common/Container";
import Button from "@/Components/Home/Button";
import Dialog from "@/Components/Home/Dialog";

const Hero = () => {
    return (
        <section>
            <Container>
                <div className="grid grid-cols-12 gap-6 items-end">
                    <div className="col-span-5 lg-max:col-span-5 xxs:col-span-12 mb-24 sm:mb-24 xxs:mb-14">
                        <h6 className="text-lg font-semibold mb-3 md:max-lg-max:mt-24 sm:max-md:mt-16 xxs:max-sm:mt-12"><span className="text-secondary">Hi!</span> there, we&apos;re</h6>
                        <h2 className="text-6xl 2xl:text-6xl xl:text-5xl lsm:text-6xl sm:text-5xl xxs:text-4xl font-bold mb-4">Pioneering <br />Design-Driven<br />Web Innovators.</h2>
                        <p className="font-medium relative after:w-[3px] after:bg-secondary after:absolute after:left-0 after:top-1.5 after:bottom-1.5 pl-2.5 mb-8">
                            Where Vision Becomes Reality, Empowering startups, businesses, and ideas to flourish, solving challenges with the art of coding.
                        </p>
                        <Button />
                    </div>
                    <div className="col-span-7 relative lg-max:block xxs:hidden">
                        <Image src="/hero-vec.png" alt="Vector" width={2000} height={2000} />
                        <div className="absolute bottom-[18%] right-[17%] cursor-pointer select-none">
                            <Dialog />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;