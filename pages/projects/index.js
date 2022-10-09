import ProjectCardDeck from '../../components/ProjectCardDeck';

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/projects');
  const data = await response.json();
  return {
    props: { projects: data },
  };
}

export default function Projects({ projects }) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="mx-auto my-10 font-headline">My Projects</h1>

      <ProjectCardDeck projects={projects} />

      <p className="text-xl mx-auto mt-12 italic">
        <a href="https://github.com/noftaly" target="_blank" rel="noreferrer">And many more available on my GitHub...</a>
      </p>
    </div>
  );
};
