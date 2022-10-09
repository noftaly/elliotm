import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProjectCard({ project }) {
  const router = useRouter();

  function handleClick(event) {
    event.preventDefault();
    router.push(`/projects/${project.slug}`);
  }

  function injectDefaultImage(event) {
    event.target.src = '/projects/default-main.png';
  }

  return (
    <>
      <article
        className="
          group cursor-pointer overflow-hidden h-full
          transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-101
          rounded-3xl shadow-md
          bg-gray-100 text-gray-800"
        onClick={handleClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-56 w-full object-cover" src={project.images.previewPath} alt={project.images.alt} onError={injectDefaultImage} />

        <div className="px-2 md:px-6 flex align-middle flex-col">
          <div className="flex items-center flex-wrap justify-between leading-tight my-2">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="flex flex-wrap">
              {project.technologies.map(([technoSlug, technoName]) =>
                <span key={technoSlug} className="m-1 px-1 text-xs font-semibold rounded-md ring-gray-900 ring-1 bg-gray-30">
                  {technoName}
                </span>
              )}
            </p>
          </div>

          <p className="my-4 text-center">{project.description.short}</p>

          <div className="flex w-full mt-2 mb-4">
            <Link href={`/projects/${project.slug}`}>
              <a className="
                mx-auto px-8 py-1
                font-semibold
                rounded-full border border-yellow-400
                group-hover:bg-yellow-400
                transition duration-300 ease-in-out">
                See more
              </a>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
