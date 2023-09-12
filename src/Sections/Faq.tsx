//Components
import Container from "@/Components/Common/Container";
import Header from "@/Components/Faq/Header";
import Left from "@/Components/Faq/Left";
import Right from "@/Components/Faq/Right";

const Faq = () => {
    return (
        <section>
            <Container className="py-16">
                <Header />
                <div className="grid grid-cols-2 gap-6">
                    <Left />
                    <Right />
                </div>
            </Container>
        </section>
    );
};

export default Faq;