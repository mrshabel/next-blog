import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Shabel Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <div className="block ml-12 ">
        <Link href="/tickets/create">
          <button className="btn-primary px-3">Create</button>
        </Link>
      </div>
    </nav>
  );
}
