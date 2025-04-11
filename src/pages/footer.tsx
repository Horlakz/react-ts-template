import { FaCircle as DotIcon } from "react-icons/fa";
import {
  FiGithub as GithubIcon,
  FiInstagram as InstagramIcon,
  FiLinkedin as LinkedInIcon,
  FiTwitter as TwitterIcon,
} from "react-icons/fi";

import logo from "@/assets/react.svg";
import Button from "@/components/ui/button";
import Link from "@/router/link";

function Footer() {
  return (
    <footer className="bg-[#333] text-center py-6">
      <div className="container mx-auto flex items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-6">
          <Button
            variant="ghost"
            as={Link}
            href={"https://linkedin.com/company/formatio-cloud"}
            target="_blank"
          >
            <LinkedInIcon />
          </Button>

          <Button
            variant="ghost"
            as={Link}
            href={"https://twitter.com/formatio_cloud"}
            target="_blank"
          >
            <TwitterIcon />
          </Button>

          <Button
            variant="ghost"
            as={Link}
            href={"https://instagram.com/formatio_cloud"}
            target="_blank"
          >
            <InstagramIcon />
          </Button>

          <Button
            variant="ghost"
            as={Link}
            href={"https://github.com/overal-x"}
            target="_blank"
          >
            <GithubIcon />
          </Button>
        </div>

        <span className="text-[4px]">
          <DotIcon />
        </span>

        <Button variant="link" as={Link} href="/terms">
          Terms
        </Button>

        <span className="text-[4px]">
          <DotIcon />
        </span>

        <Button variant="link" as={Link} href="/privacy">
          Privacy
        </Button>

        <span className="text-[4px]">
          <DotIcon />
        </span>

        <p className="flex items-center gap-2">
          <img src={logo} className="w-6" />

          <span>&copy; Template App {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
