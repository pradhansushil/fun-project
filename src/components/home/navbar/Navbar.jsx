import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Journal", url: "/journal" },
  { name: "Gallery", url: "/gallery" },
];

export function Navbar() {
  return (
    <nav>
      <div>
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <SocialLinks />
      </div>

      <div>
        <button>Log In</button>
      </div>
    </nav>
  );
}
