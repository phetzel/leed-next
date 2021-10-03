import Link from "next/link";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href="/projects/1">1</Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
