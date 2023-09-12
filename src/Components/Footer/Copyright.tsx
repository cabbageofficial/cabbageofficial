import Link from "next/link";

//Component
import Container from "../Common/Container";
import Icons from "../Common/Icons";

const Copyright = () => {
    return (
        <div>
            <Container className="py-2 flex items-center">
                <p className="font-medium flex-1">©{new Date().getFullYear()} Cabbageweb. All right reserved!</p>
                <Link href="tel:+8809606994403" className="flex items-center gap-2">
                    <Icons className="" icon="ph:phone-fill" />
                    <span>+880 9606 994403</span>
                </Link>
            </Container>
        </div>
    );
};

export default Copyright;