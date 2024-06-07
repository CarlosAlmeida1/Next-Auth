"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size={"lg"} variant={"outline"} className="w-full">
        <FcGoogle className="size-5" />
      </Button>
      <Button size={"lg"} variant={"outline"} className="w-full">
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
}
