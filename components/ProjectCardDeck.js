import ProjectCard from './ProjectCard';

export default function ProjectCardDeck({ projects }) {
  return (
    <div className="grid grid-cols-1 mx-0 sm:mx-10 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map(project =>
        <ProjectCard key={project.slug} project={project} />
      )}
    </div>
  );
};
