//Components
import Container from "@/Components/Common/Container";
import Connect from "@/Components/Footer/Connect";
import Form from "@/Components/Footer/Form";
import Copyright from "@/Components/Footer/Copyright";

const Footer = () => {
    return (
        <footer className="bg-[#fccdcdff] bg-[url('/footer-bg.png')] bg-contain bg-opacity-10" id="contact">
            <Container className="py-10">
                <div className="grid grid-cols-12 md:grid-cols-12 xxs:grid-cols-1 gap-5 md:gap-5 xxs:gap-0 xxs:max-md:gap-y-10">
                    <Connect />
                    <Form />
                </div>
            </Container>
            <Copyright />
        </footer>
    );
};

export default Footer;