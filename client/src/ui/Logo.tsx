import Link from "next/link";
import * as React from "react";
import { WhoopeeIcon } from "../icons";
import { Primary } from "../stories/Button.stories";

export interface LogoProps {
  variant?: "primary" | "secondary";
}

const Logo: React.FC<LogoProps> = ({ variant }) => {
  return (
    <div className="flex items-center gap-2">
      <WhoopeeIcon height={30} width={30} />
      <div
        className={`font-primary font-bold text-2xl ${
          variant === "secondary" ? "text-white" : "text-grey-primary"
        }`}
      >
        <Link href="/">Whoopee</Link>
      </div>
    </div>
  );
};

export default Logo;
