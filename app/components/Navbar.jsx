import Navlinks from "./NavLinks";
import ProfileButton from "./ProfileButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1>Shabel Helpdesk</h1>
      <Navlinks />
      <ProfileButton />
    </nav>
  );
}
