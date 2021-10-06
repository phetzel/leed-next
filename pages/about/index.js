import hvacAbout from "../../public/hvac-about.jpg";
import PageImage from "../../components/page-image/PageImage";
import AboutDetails from "../../components/about/AboutDetails";
import TeamIndex from "../../components/about/TeamIndex";

const About = () => {
  return (
    <div className="about">
      <PageImage image={hvacAbout} title={"Our team"} />
      <AboutDetails />
      <TeamIndex />
    </div>
  );
};

export default About;
