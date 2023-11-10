import Link from "next/link";

async function getTickets() {
  try {
    const res = await fetch("/api/tickets", {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TicketList() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const tickets = await getTickets();
  return (
    <>
      {!tickets ||
        (tickets.length === 0 && <p>Sorry, no tickets available now</p>)}

      {tickets &&
        tickets?.map((ticket) => (
          <div key={ticket._id} className="card my-5">
            <Link href={`tickets/${ticket._id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}
