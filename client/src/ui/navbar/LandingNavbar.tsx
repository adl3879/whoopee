import * as React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Twitter from "../../icons/Twitter";

export interface LandingNavbarProps {}

const LandingNavbar: React.FC<LandingNavbarProps> = ({}) => {
  return (
    <div className="flex items-center max-w-full justify-between p-4">
      <div>
        <Logo variant="secondary" />
      </div>
      <div className="text-white text-lg flex items-center font-primary font-medium">
        <Link href="#">Login</Link>
        <Twitter className="ml-8" />
      </div>
    </div>
  );
};

export default LandingNavbar;
