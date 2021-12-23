import * as React from "react";
import { GoogleIcon, GithubIcon, FacebookIcon } from "../icons";

export interface SignInButtonProps {
  variant: "google" | "github" | "facebook";
}

const SignInButton = ({ variant, ...props }: SignInButtonProps) => {
  return (
    <button
      className={`bg-grey-50 flex gap-5 items-center py-3 px-6 rounded-md outline-none w-full`}
      {...props}
    >
      {variant == "google" ? (
        <GoogleIcon />
      ) : variant == "github" ? (
        <GithubIcon />
      ) : (
        <FacebookIcon />
      )}
      <h6 className="text-grey-secondary text-lg font-primary">
        Continue with {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </h6>
    </button>
  );
};

export default SignInButton;
