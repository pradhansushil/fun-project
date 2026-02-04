import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const iconMap = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub,
};

const socialLinksArray = [
  { name: "facebook", url: "https://www.facebook.com/" },
  { name: "linkedin", url: "https://www.linkedin.com/" },
  { name: "github", url: "https://github.com/" },
];

export function SocialLinks() {
  return (
    <ul className="social-links">
      {socialLinksArray.map((item) => {
        const Icon = iconMap[item.name];
        return (
          <li key={item.name}>
            <a href={item.url}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
