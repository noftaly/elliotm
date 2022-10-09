import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      {/* Flex for the two rows (links & copyright) */}
      <div className="flex flex-col container max-w-3xl mx-auto py-4">
        {/* Flex for the links */}
        <div className="flex justify-around">
          <div className="flex-grow-1">
            <a href="https://github.com/noftaly" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub
            </a>
          </div>
          <div className="flex-grow-1">
            <a href="https://discord.com/users/188341077902753794" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faDiscord} className="mr-2" />
              Discord
            </a>
          </div>
          <div className="flex-grow-1">
            <a href="https://linkedin.com/in/elliot-maisl" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mx-auto text-sm mt-4">
          Made with ❤️ by Elliot Maisl — © 2022
        </div>
      </div>
    </footer>
  );
};
