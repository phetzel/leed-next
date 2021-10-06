import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div classNmae="project-detail">
      <h1>{id}</h1>
    </div>
  );
};

export const getStaticPaths = () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
    ],
  };
};

// static site generation
// run on build never ran on machines
export const getStaticProps = async (context) => {
  const { id } = context.params;
  // fetch data
  return {
    props: {},
    revalidate: 10,
  };
};

export default ProjectDetail;
