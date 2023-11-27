import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="my-5 flex items-center mx-5 md:mx-10 lg:mx-16 xl:mx-20 justify-between">
      <div>logo</div>
      <div className="">
        <Button className="px-2 py-1 rounded-md" variant={"outline"}>
          Say Hello
        </Button>
      </div>
    </nav>
  );
}
