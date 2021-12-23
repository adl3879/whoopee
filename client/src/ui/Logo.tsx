import * as React from "react";
import { WhoopeeIcon } from "../icons";

export default function Logo(): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <WhoopeeIcon height={40} width={40} />
      <div className="font-primary text-grey-primary font-bold text-3xl">
        Whoopee
      </div>
    </div>
  );
}
