import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <div className="bg-zinc-100 w-full py-5">
      <span className="flex justify-center gap-x-3 items-center">
        <Link to="/">
          <Button variant={"link"}>Home</Button>
        </Link>
        <Link to="/about">
          <Button variant={"link"}>About</Button>
        </Link>
        <Link to="/counter">
          <Button variant={"link"}>Counter</Button>
        </Link>
      </span>
    </div>
  );
}
