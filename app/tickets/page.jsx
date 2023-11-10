import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default async function Tickets() {
  return (
    <main>
      <nav>
        <div className="w-full">
          <div className="flex justify-between ">
            <h2>Tickets</h2>

            <Link href="/tickets/create">
              <button className="btn-primary px-5 rounded-md">Create</button>
            </Link>
          </div>

          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
