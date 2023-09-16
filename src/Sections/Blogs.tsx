//Components
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Blog/Heading";
import Card from "@/Components/Blog/Card";

const Blogs = () => {
    return (
        <section>
            <Container className="pb-24">
                <Heading />
                <Card />
            </Container>
        </section>
    );
};

export default Blogs;