import hvacAbout from "../../public/hvac-about.png";
import PageImage from "../../components/page-image/PageImage";
import AboutDetails from "../../components/about/AboutDetails";
import TeamIndex from "../../components/about/TeamIndex";

const About = () => {
  return (
    <div className="page">
      <PageImage image={hvacAbout} title={"Our team"} />
      <AboutDetails />
      <TeamIndex />
    </div>
  );
};

export default About;
