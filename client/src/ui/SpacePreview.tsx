import * as React from "react";
import Image from "next/image";
import { OptionsIcon } from "../icons";

export interface SpacePreviewProps {
  image: string;
  name: string;
}

const SpacePreview: React.FC<SpacePreviewProps> = ({ name, image }) => {
  return (
    <div className="rounded shadow-md w-72">
      <div className="bg-grey-50 w-72 h-52 relative">
        {image && (
          <Image
            loader={() => image}
            src={image}
            alt={name}
            layout="fill"
            className="w-full h-full relative object-cover rounded-t"
          />
        )}
      </div>
      <div className="flex items-center justify-between px-6 py-3">
        <h3 className="font-primary text-base text-grey-primary font-medium">
          {name}
        </h3>
        <button className="outline-none ml-1 h-full">
          <OptionsIcon />
        </button>
      </div>
    </div>
  );
};

export default SpacePreview;
