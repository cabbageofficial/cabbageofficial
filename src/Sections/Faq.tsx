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
                <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-6 md:gap-6 xxs:gap-0">
                    <Left />
                    <Right />
                </div>
            </Container>
        </section>
    );
};

export default Faq;