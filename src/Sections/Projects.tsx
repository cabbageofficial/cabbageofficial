//Components
import Container from "@/Components/Common/Container";
import Heading from "@/Components/Projects/Heading";
import Card from "@/Components/Projects/Card";
import Skill from "@/Components/Projects/Skill";

const Projects = () => {
    return (
        <section id="portfolio">
            <Container>
                <Heading />
                <Card />
                <Skill />
            </Container>
        </section>
    );
};

export default Projects;