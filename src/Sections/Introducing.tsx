//Components
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Introducing/Heading";
import Content from "@/Components/Introducing/Content";

const Introducing = () => {
    return (
        <section>
            <Container className="pb-32 pt-16">
                <Heading />
                <Content />
            </Container>
        </section>
    );
};

export default Introducing;