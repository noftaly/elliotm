import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="my-container h-[70vh]">
      <h1>Oooops...</h1>
      <h2 className="py-4">That page cannot be found :/</h2>
      <p>
        Go back to the <Link href="/"><a className="italic">Homepage</a></Link>
      </p>
    </div>
  );
};
