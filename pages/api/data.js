import { stripIndent } from 'common-tags';

const projects = [
  {
    name: 'Okampus',
    slug: 'okampus',
    enabled: true,
    status: 'In Development',
    startedAt: 'December 2021',
    technologies: [
      ['typescript', 'TypeScript'],
      ['nestjs', 'NestJS'],
      ['git', 'Git'],
      ['docker', 'Docker'],
      ['postgresql', 'PostgreSQL'],
      ['redis', 'Redis'],
    ],
    motivations: [
      'Build an enterprise-grade API for an SaaS application',
      'Learn how to make robust APIs with NestJS',
      'Follow a set of specifications and a schedule',
    ],
    links: {
      github: 'https://github.com/Okampus/okampus',
    },
    description: {
      short: "Student platform & digital workspace for schools - An SaaS solution to improve in-school communication!",
      long: stripIndent`
        Okampus is a student platform & digital workspace for schools.
        Originally built at and for EFREI Paris, it has grown to be an SaaS solution for any university or school.
        Its core goals are to improve in-school communication and to provide tools for the students to use everyday  to
        simplify their school-life.

        It includes a full-blown forum (ticketing, archiving, actionnable feedback posts...), a feature-complete club
        management system (membership, events, file drive, accounting...) and many other features (Wiki, restaurant
        menus, blog, lost-and-found, rewarding system...).

        You can find the [full list of our goals in our GitHub ReadMe](https://github.com/Okampus/okampus#objectifs).
      `,
    },
    images: {
      alt: 'okampus',
      type: 'images',
      previewPath: '/projects/okampus/main-okampus.png',
      images: [{
        name: 'main-okampus',
        raw: 'main-okampus.png',
        path: '/projects/okampus/main-okampus.png',
      }],
    },
  },

  {
    name: 'Swan',
    slug: 'swan',
    enabled: true,
    status: 'Final Phase',
    startedAt: 'April 2019',
    technologies: [
      ['typescript', 'TypeScript'],
      ['mongodb', 'MongoDB'],
      ['git', 'Git'],
    ],
    motivations: [
      'Learn and practice Node.js and TypeScript',
      'Organize my codebase and manage a GitHub repo (Issues, PRs, Release)',
      'Use databases (MongoDB, Redis)',
    ],
    links: {
      github: 'https://github.com/Skript-MC/Swan',
    },
    description: {
      short: 'A general purpose Discord bot used by hundreds of people every day.',
      long: stripIndent`
        For the Discord of a fairly large developer community (1800+ members), of which I had been a part for a long
        time, I developed a bot. I wasn't the only one on this project, but I was the main developer. This multi-
        functional bot features basic commands, such as output predefined messages or send dad-jokes, but also more
        complicated ones, such as a complex moderation module, and a doc-search module.

        Since the full rewrite in TypeScript, the bot can now also be controlled via an
        [admin panel](https://github.com/Skript-MC/SwanDashboard) which is very handy.

        I'm very proud of this project, as it allowed me to take my development skills to another level. It is mainly
        through this project that I learned JavaScript as well as many other technologies. It also forced me to make
        maintainable code, and help and guide new contributors.
      `,
    },
    images: {
      alt: 'swan',
      type: 'images',
      previewPath: '/projects/swan/main.png',
      images: [{
        name: 'main',
        raw: 'main.png',
        path: '/projects/swan/main.png',
      }, {
        name: 'doc',
        raw: 'madocin.png',
        path: '/projects/swan/doc.png',
      }, {
        name: 'poll',
        raw: 'poll.png',
        path: '/projects/swan/poll.png',
      }],
    },
  },

  {
    name: 'nipinit',
    enabled: true,
    slug: 'nipinit',
    status: 'Final Phase',
    startedAt: 'August 2020',
    technologies: [
      ['typescript', 'TypeScript'],
      ['npm', 'npm'],
      ['git', 'Git'],
    ],
    motivations: [
      'Facilitate the creation of Node.js projects',
      'Make a CLI tool',
      'Create a public npm package',
    ],
    links: {
      github: 'https://github.com/noftaly/nipinit',
      npm: 'https://www.npmjs.com/package/nipinit',
    },
    description: {
      short: 'A CLI to easily create new Node.js projects with presets and complete boilerplates.',
      long: stripIndent`
        By creating Node.js projects, I got tired of having to create plenty of initial files, install a lot
        of dependencies and configure ESLint, Babel, TypeScript, GitHub's files and workflows, npm scripts... Hence, I
        created this utility to easily start new Node.js' projects. Just one command and a few questions, and you're
        ready to code right away!

        It also features a complete preset system to remember your preferences.
      `,
    },
    images: {
      alt: 'nipinit',
      type: 'images',
      previewPath: '/projects/nipinit/main.png',
      images: [{
        name: 'main',
        raw: 'main.png',
        path: '/projects/nipinit/main.png',
      }],
    },
  },

  {
    name: 'LadderGame',
    slug: 'laddergame',
    enabled: true,
    status: 'Finished',
    startedAt: 'July 2018',
    technologies: [['python', 'Python']],
    motivations: [
      'Practicing Python and Tkinter',
      'Learn OOP in Python',
      'Learn how to orchestrate a game (event loop, ticks, players...)'],
    links: {
      github: 'https://github.com/noftaly/laddergame',
    },
    description: {
      short: 'A multiplayer semi-RPG game where a knight has to retrieve treasures, being chased by a skeleton.',
      long: stripIndent`
        To practice Python and Tkinter development, I created this game, where a knight must collect all the chests
        of each level, without getting caught by the skeleton. Both are controlled by a keyboard by two different
        players. It is very easy to create new levels: just create a txt file, then design your level with letters.
        You can see the file of the first level in the attached images.

        I eventually continued working on it again because I was quite proud of the result, but not of the code. I
        though it was a good opportunity to learn OOP in Python, and decided to give it a go!
      `,
    },
    images: {
      alt: 'laddergame',
      type: 'images',
      previewPath: '/projects/laddergame/main.png',
      images: [{
        name: 'main',
        raw: 'main.png',
        path: '/projects/laddergame/main.png',
      }, {
        name: 'level2',
        raw: 'level2.png',
        path: '/projects/laddergame/level2.png',
      }, {
        name: 'level3',
        raw: 'level3.png',
        path: '/projects/laddergame/level3.png',
      }],
    },
  },

  {
    name: 'Techno Futur',
    enabled: true,
    slug: 'technofutur',
    status: 'Finished',
    startedAt: 'September 2019',
    technologies: [
      ['adobe-photoshop', 'Adobe Photoshop'],
      ['adobe-illustrator', 'Adobe Illustrator'],
      ['adobe-indesign', 'Adobe InDesign'],
    ],
    motivations: [
      'Succeed my "TPE" :)',
      'Practicing Adobe Photoshop',
      'Learn Adobe Illustrator & Adobe Indesign',
    ],
    links: {},
    description: {
      short: 'A science popularization magazine about Hyperloop.',
      long: stripIndent`
        *A "TPE" is a french exam we used to have in highschool, where we had to, by groups of 4, choose a subject that
        covers two of our school subjects (for me: biology and physics). We then had 6 months to prepare a written
        report in the form of our choice (we chose the magazine), and an oral presentation.*

        For our high-school "TPE" project, 3 friends and I decided to give a presentation about the Hyperloop. We chose
        a science popularization magazine as a medium because it's a format that lends itself very well to the subject.
        The articles were written by the 4 of us, but the illustrations, the layout and the realization of the magazine
        itself were made by me, thanks to Adobe Photoshop, Adobe Illustrator (for some scientific diagrams) and Adobe
        InDesign.

        I learned a lot about making a magazine and presenting text and data to a broad public (novices and informed).
        I also learned a lot about Adobe Illustrator and InDesign.
      `,
    },
    images: {
      alt: 'technofuturhyperloop',
      type: 'pdf',
      previewPath: '/projects/technofutur/main.png',
      images: [{
        name: 'main-tf-hyperloop-magazine',
        raw: 'main-tf-hyperloop-magazine.pdf',
        path: '/projects/technofutur/main-tf-hyperloop-magazine.pdf',
      }],
    },
  },

  {
    name: 'MineField',
    slug: 'minefield',
    enabled: true,
    status: 'Finished',
    startedAt: 'March 2019',
    technologies: [['csharp', 'C#'], ['unity3d', 'Unity 3D']],
    motivations: [
      'Learn how to use Unity 3D',
      'Learn the basics of C# with Unity 3D',
      'Make a simple game with Unity 3D',
    ],
    links: {
      github: 'https://github.com/noftaly/minefield',
    },
    description: {
      short: 'A 3D game where a big rolling ball has to cross a dangerous minefield!',
      long: stripIndent`
        MineField is a game made with Unity 3D. Mines are randomly placed on the field at the beginning of each game.
        You have to find your way arround to go to the arrival point without touching the invisible mines! Fortunately,
        when you approach a mine, you hear beeps. The closer you get to the mine, the faster these beeps get. If you
        get too close... you explode!

        I made this project in a workshop of [Tech Kids Academy](https://www.techkidsacademy.com/), and it allowed me
        to learn more about Unity. I then continued it a bit on my own, but eventually stopped working on it.
      `,
    },
    images: {
      type: 'images',
      alt: 'minefield',
      previewPath: '/projects/minefield/main.png',
      images: [{
        name: 'main',
        raw: 'main.png',
        path: '/projects/minefield/main.png',
      }],
    },
  },

  {
    name: 'CoinsRun',
    slug: 'coinsrun',
    enabled: true,
    status: 'Finished',
    startedAt: 'July 2015',
    technologies: [['csharp', 'C#'], ['unity3d', 'Unity 3D']],
    motivations: [
      'Learn how to use Unity3D and C#',
      'Discover the Universe of development',
    ],
    links: {
      github: 'https://github.com/noftaly/CoinsRun',
    },
    description: {
      short: 'A 3D game with a huge map, where we have to collect coins, but avoid the poisonous water!',
      long: stripIndent`
        CoinsRun is a basic 3D game, made with Unity. It has a large 3D map, with deadly water. You have to collect 12
        coins and bring them all to a small house in the middle of the map, in a given time (3 minutes), obviously
        avoiding water.

        This project was one of my first, if not my first development project ever. I made this project in a
        workshop of [Tech Kids Academy](https://www.techkidsacademy.com/), and it allowed me to learn more about Unity,
        but most importantly about programming.
      `,
    },
    images: {
      alt: 'coinsrun',
      type: 'images',
      previewPath: '/projects/coinsrun/main.png',
      images: [{
        name: 'main',
        raw: 'main.png',
        path: '/projects/coinsrun/main.png',
      }],
    },
  },

  {
    name: 'ElliotM',
    slug: 'elliotm',
    enabled: true,
    status: 'In Development',
    startedAt: 'February 2021',
    technologies: [
      ['react', 'React'],
      ['nextjs', 'Next.js'],
      ['sass', 'Sass'],
      ['git', 'Git'],
    ],
    motivations: [
      'Learn Next.js and React',
      'Learn how to use Tailwind CSS',
      'Make my own personnal website',
    ],
    links: {
      github: 'https://github.com/noftaly/elliotm',
    },
    description: {
      short: 'My personnal website, where all my projects are (this site!).',
      long: stripIndent`
        To present all my projects, I decided to create a website of my own, where I could present them. I've already
        done it 2 times, the first time was one of my first website, and featured a home-made account system (to manage
        projects from the site itself). The second one was simpler, but made with vanilla web technologies, and I
        wanted it to be fast and to use either React or Vue. I decided to go with React & Next.js for no particular
        reason. I also decided to move away from Bootstrap to make my own CSS styles and not use pre-made models. I
        went with Tailwind CSS and I'm really happy with it!
      `,
    },
    images: {
      alt: 'elliotm',
      type: 'images',
      previewPath: '/projects/elliotm/main.png',
      images: [{
        name: 'main',
        raw: 'main.png',
        path: '/projects/elliotm/main.png',
      }],
    },
  },
];

export default projects;
