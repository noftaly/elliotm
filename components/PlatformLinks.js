const platformNames = new Map([
  ['github', 'GitHub'],
  ['npm', 'npm'],
  ['website', 'its website'],
]);

export default function PlatformLinks({ links }) {
  let element;

  if (Object.keys(links).length > 0) {
    const platforms = [];
    for (const [platform, link] of Object.entries(links)) {
      platforms.push(<a key={platform} href={link} target="_blank" rel="noreferrer">{platformNames.get(platform)}</a>);
      platforms.push(', ');
    }

    platforms[platforms.length - 3] = ' or ';

    element = <span>See more on {platforms.slice(0, -1)}.</span>
  }

  return element || <span></span>;
};
