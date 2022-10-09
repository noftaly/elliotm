import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';
import { If, Then, Else } from 'react-if';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PlatformLinks from '../../components/PlatformLinks';
import ImageCarousel from '../../components/ImageCarousel';

const PdfViewer = dynamic(
  () => import('../../components/PdfViewer'),
  { ssr: false },
);

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/projects');
  const data = await response.json();
  return {
    paths: data.map(project => ({ params: { slug: project.slug } })),
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:3000/api/projects/${context.params.slug}`);
  const data = await response.json();
  return {
    props: { project: data },
  };
};

export default function ProjectDetails({ project }) {
  console.log('DEBUG ~ file: [slug].js ~ line 34 ~ ProjectDetails ~ project', project);
  return (
    <div className="underline-links">
      <div className="
        absolute top-0 right-0 left-0 mb-20
        w-full h-two-third-screen shadow-lg
        transform -skew-y-3
        bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="
          px-5 sm:pl-10 mt-28
          text-gray-800 text-center sm:text-left
          transform skew-y-3">
          <h1 className="text-mega-xl font-headline">{project.name}</h1>
          <p className="text-lg">{project.description.short}</p>
        </div>
      </div>
      <div className="my-container mt-two-third-screen">
        <div className="grid grid-cols-2">
          <div className="col-start-1 col-span-2 md:col-span-1">
            <h1 className="font-headline">Motivations</h1>
            <ul className="list-disc list-inside">
              {project.motivations.map((motivation, i) =>
                <li key={i}>{motivation}</li>
              )}
            </ul>
          </div>

          <div className="md:ml-auto col-span-2 md:col-span-1 md:col-start-2">
            <h1 className="font-headline">Information</h1>
            <ul>
              <li>Started in <span className="font-semibold">{project.startedAt}</span></li>
              <li>Status: <span className="font-semibold">{project.status}</span></li>
              <li><PlatformLinks links={project.links} /></li>
            </ul>
          </div>

          <div className="col-span-2 mt-10">
            <h1 className="font-headline">Technologies used</h1>

            <div className="flex justify-around flex-wrap gap-10">
              {project.technologies.map((technology, i) =>
                <div key={i} className="flex flex-row my-2 sm:my-0 sm:w-auto">
                  <Image src={`/technologies-svg/${technology[0]}.svg`} alt={technology[0]} height="50px" width="50px" />
                  <span className="ml-3 my-auto">{technology[1]}</span>
                </div>
              )}
            </div>
          </div>

          <div className="col-span-2 mt-10">
            <h1 className="font-headline">Description</h1>
            <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]} components={{
              p: ({node, ...props}) => <p className="py-2" {...props} />
            }}>
              {project.description.long}
            </ReactMarkdown>
          </div>

        </div>
      </div>
      <div className="mt-10 mb-20">
        <If condition={project.images.type === 'images'}>
          <Then>
            <h1 className="font-headline text-center mb-5">Images</h1>
            <ImageCarousel images={project.images.images} />
          </Then>
          <Else>
            <h1 className="font-headline text-center mb-5">Preview</h1>
            <div className="flex justify-center">
              <PdfViewer url={project.images.images[0].path} pageNumber={1} />
            </div>
          </Else>
        </If>
      </div>
    </div>
  );
};
