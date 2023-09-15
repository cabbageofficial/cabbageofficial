//Components
import Container from "@/Components/Common/Container";
import Logo from "@/Components/Headers/Logo";
import Mail from "@/Components/Headers/Mail";
import Navs from "@/Components/Headers/Navs";
import Contact from "@/Components/Headers/Contact";
import Floating from "@/Components/Headers/Floating";

const Header = () => {
    return (
        <header id="home" className="bg-red-white py-1.5">
            <Container className="grid grid-cols-12 lg:grid-cols-12 xxs:grid-cols-3 items-center">
                <Logo />
                <Mail />
                <Navs />
                <Contact />
            </Container>
            <Floating />
        </header>
    );
};

export default Header;