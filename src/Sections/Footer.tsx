//Components
import Container from "@/Components/Common/Container";
import Connect from "@/Components/Footer/Connect";
import Form from "@/Components/Footer/Form";
import Copyright from "@/Components/Footer/Copyright";

const Footer = () => {
    return (
        <footer className="bg-[#fccdcdff] bg-[url('/footer-bg.png')] bg-contain bg-opacity-10" id="contact">
            <Container className="py-10">
                <div className="grid grid-cols-12 gap-5">
                    <Connect />
                    <Form />
                </div>
            </Container>
            <Copyright />
        </footer>
    );
};

export default Footer;