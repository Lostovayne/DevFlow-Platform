"use client";

import Image from "next/image";

import { toast } from "sonner";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClassName =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 ";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      throw new Error("Sign-in is not implemented"); // Simulate a failed sign-in attempt
    } catch (error) {
      console.error(error);
      toast.warning("Sign-in Failed", {
        description:
          error instanceof Error ? error.message : "An error occurred while signing in.",
        descriptionClassName: "text-sm",
        duration: 5000,
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClassName} onClick={() => handleSignIn("github")}>
        <Image
          src={"/icons/github.svg"}
          width={20}
          height={20}
          alt={"Github Icon"}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClassName} onClick={() => handleSignIn("google")}>
        <Image
          src={"/icons/google.svg"}
          width={20}
          height={20}
          alt={"Google Icon"}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};
export default SocialAuthForm;
