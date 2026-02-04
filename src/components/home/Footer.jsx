import { SocialLinks } from "../home/navbar/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact">
      <div className="footer-content">
        <p>&copy; {currentYear} Sushil Pradhan</p>

        <div className="footer-contact">
          <p>Created on: Feb 4, 2026</p>
          <h2>Contact:</h2>
          <address>
            <p>
              Work:{" "}
              <a href="mailto:sushil.frontenddev@gmail.com">
                sushil.frontenddev@gmail.com
              </a>
            </p>
            {/* change this later */}
            <p>
              Personal: <a href="mailto:sush@example.com">sush@example.com</a>
            </p>
          </address>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
