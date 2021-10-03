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

export default ProjectDetail;
