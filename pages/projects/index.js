import hvacService from "../../public/hvac-projects.png";
import PageImage from "../../components/page-image/PageImage";
import ProjectList from "../../components/projects/ProjectList";

const Projects = () => {
  return (
    <div className="page">
      <PageImage image={hvacService} title={"Previous work"} />
      <ProjectList />
    </div>
  );
};

// static site generation
// run on build never ran on machines
// export const getStaticProps = async () => {
//   // fetch data
//  return{
//    props: {
//      projects: data
//    },
//    revalidate: 10 <--- every 10 seconds
//  }
// };

// server side generation
// export const getServerSideProps = (context) => {
// const req = context.req;
// const res = context.res;
// fetch data
//   return {
//     props: data
//   }
// }

export default Projects;
