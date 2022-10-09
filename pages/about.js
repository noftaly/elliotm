import Link from 'next/link';

export default function About() {
  return (
    <div className="my-container">
      <h1 className="font-headline text-center">About Me</h1>
      <p className="my-4">
        Iʼm Elliot, developer from France 🇫🇷! Iʼm a student, in my third year of my Computer Science Master, at <Link
        href="https://efrei.fr" target="_blank" rel="noopener noreferrer">EFREI Paris</Link>.
      </p>
      <p className="my-4">
        I love programming websites (mostly backends), applications and algorithms.
        For the last 6 years, Iʼve been constantly learning different programming languages: mainly Javascript,
        Typescript and Python, but also Swift, Unity3D & C#, Go, C, Java... and technologies: React, Next.js, MongoDB,
        PostgreSQL, Redis, Docker, Kubernetes, AWS, Terraform...
      </p>

      <br />

      <p className="my-4">
        I began my development journey by making Minecraft plugins, when I was 14 years old. Having no skill in any
        programing language whatsoever, I tried a much simpler, sentence-based scripting language, <Link
        href="https://docs.skriptlang.org/" target="_blank" rel="noopener noreferrer">Skript</Link>. Thanks to this
        language I learned the programming logic without the hassle of following a strict syntax.
      </p>
      <p className="my-4">
        After that, I tried web development, although I very quickly turned into Node.js and backend development. I
        tried multiple languages along the way, some of which I like very much, some of which I donʼt, but I mainly
        focus on JavaScript because it stays the easiest for pet projects and web development.
      </p>

      <p className="my-4">
        My first big project was a Discord bot, <Link href="/projects/swan">Swan</Link>, which learned me a lot about
        JavaScript. A few years later, I participated into another big, enterprise-grade project: <Link
        href="/projects/okampus">Okampus</Link>. This project was a huge learning experience for me, as I had to learn
        a lot of new technologies and take into account many security and scalability concerns.
      </p>

      <h1 className="font-headline text-center">Contact Me</h1>
      <p className="my-4">
        If you want to contact me, the quickest would be by Discord (
          <a href="https://discord.com/users/188341077902753794" target="_blank" rel="noopener noreferrer">noftaly#0359</a>
        ), or by email (
          <a href="mailto:elliot@maisl.fr" target="_blank" rel="noopener noreferrer">elliot@maisl.fr</a>
        ).
      </p>
    </div>
  );
};
