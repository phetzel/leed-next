import hvacService from "../../public/hvac-services.jpg";
import PageImage from "../../components/page-image/PageImage";
import ServiceList from "../../components/services/ServiceList";

const Services = () => {
  return (
    <div className="services">
      <PageImage image={hvacService} title={"What we offer"} />
      <ServiceList />
    </div>
  );
};

export default Services;
