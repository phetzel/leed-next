import hvacService from "../../public/hvac-projects.jpg";
import PageImage from "../../components/page-image/PageImage";

const Projects = () => {
  return (
    <div className="projects">
      <PageImage image={hvacService} title={"Previous work"} />
    </div>
  );
};

export default Projects;
