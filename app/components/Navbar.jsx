import { UserButton } from "@clerk/nextjs";
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1>Shabel Helpdesk</h1>
      <Navlinks />
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}
