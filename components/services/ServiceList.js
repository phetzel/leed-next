import classes from "./Service.module.css";
import ServiceListItem from "./ServiceListItem";

const ServiceList = () => {
  return (
    <div className={classes.serviceList}>
      <ul>
        <ServiceListItem
          description={
            "Leed Mechanical is capable of handling all of your HVAC design needs.  Working with initial drawings or a general set of building specifications, we can create a detailed set of HVAC plans ready for implementation. We alter each design to the unique requirements and goals of each client.   With over 20 years of design, installation and service experience, we are here to help you with your project from inception through fruition."
          }
          title={"Design Build"}
        />
        <ServiceListItem
          description={
            "We provide an intelligent network of electronic devices that monitor and control the mechanical and lighting systems in a building. The purpose for selecting and installing an automation system is to create an intelligent building and reduce energy and maintenance costs. Building automation systems monitor occupancy, temperature and temperature variations, air pollution levels, lighting levels, and other internal conditions that affect the human environment, energy consumption and building integrity."
          }
          title={"Automation & Controls"}
        />
        <ServiceListItem
          description={
            "As HVAC equipment ages, it can struggle to operate.  Failures, decreased system performance, changed user requirements and decreased energy performance are all reasons you may consider upgrading or replacing your HVAC mechanical systems.  Leed Mechanical will work with you to define your buildings requirements and design a system that meets your budget and your needs."
          }
          title={"Installation or Replacement of Mechanical Systems"}
        />
        <ServiceListItem
          description={
            "By changing older HVAC controls to sophisticated WEB based controls, retrofit can lower O&M costs, produce greater efficiency, and produce better performance. A technologically advanced control system can provide the ability to base operational decisions on real-time performance data and uncover hidden costs"
          }
          title={"Building Retro Fits"}
        />
        <ServiceListItem
          description={
            "By performing a comprehensive test of your HVAC system we can verify that the system performs according to the design intent and your criteria.  Commissioning can ensure higher energy efficiency, improve the comfort of the buildings occupants, and extend the life of the equipment."
          }
          title={"Commissioning"}
        />
        <ServiceListItem
          description={
            "We craft custom PM plans that are designed to suit the specific building/facility needs. Properly timed intervals of preventative maintenance can greatly increase HVAC system reliability and efficiency.  Our comprehensive maintenance program can help keep your heating and air conditioning systems, climate controls, chillers and boilers running more efficiently and reliably. Preventative maintenance can help keep your system from degrading and reduce equipment failures promoting less equipment downtime. "
          }
          title={"Preventative Maintenance"}
        />
        <ServiceListItem
          description={
            "Does your HVAC equipment run on a 9-5 time clock?  Most do not and neither does Leed Mechanical.  We have emergency service technicians available 24 hours a day, 7 days a week to solve HVAC issues that require immediate attention.  Calls can be placed via website, e-mail, or telephone."
          }
          title={"24 Hour Service"}
        />
      </ul>
    </div>
  );
};

export default ServiceList;
