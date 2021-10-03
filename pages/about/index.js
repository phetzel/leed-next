import hvacAbout from "../../public/hvac-about.jpg";
import PageImage from "../../components/page-image/PageImage";

const About = () => {
  return (
    <div className="about">
      <PageImage image={hvacAbout} title={"Out team"} />
    </div>
  );
};

export default About;
