import hvacService from "../../public/hvac-projects.jpg";
import PageImage from "../../components/page-image/PageImage";

const Projects = () => {
  return (
    <div className="page">
      <PageImage image={hvacService} title={"Previous work"} />
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
