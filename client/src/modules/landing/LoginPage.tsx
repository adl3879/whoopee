import * as React from "react";
import LandingNavbar from "../../ui/navbar/LandingNavbar";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import SignInButton from "../../ui/SignInButton";
import Link from "next/link";

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <div className="h-screen bg-bg">
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-6 px-4">
        <LandingNavbar />

        <div className="header flex flex-col md:flex-row justify-center md:justify-between items-center mt-12">
          <div className="text-center md:text-left">
            <h1 className="font-primary text-white text-3xl md:text-4xl font-bold">
              The best way to connect together
            </h1>
            <p className="text-white text-lg font-medium md:w-4/5 my-3 md:mt-9 md:mb-0">
              Whoopee is a virtual space for anyone to meet, chat, and have fun
              together.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Link href="#">
              <Button
                label="Create new space"
                variant="primary"
                rounded
                onClick={() => setModalOpen(true)}
              />
            </Link>
            <p className="text-white text-lg font-medium mt-2">
              It is absolutely free.
            </p>
          </div>
        </div>
      </div>
      {/* modal */}
      <Modal
        title="Sign In"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <SignInButton variant="google" /> <br />
        <SignInButton variant="facebook" /> <br />
        <SignInButton variant="github" /> <br />
      </Modal>
    </div>
  );
};

export default LoginPage;
