import { notFound } from "next/navigation";

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL + "/api/tickets"
  );
  const data = await res.json();

  const params = data.map((param) => ({ id: param.id }));
  return params;
}

async function getTicket(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/tickets/${id}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      return notFound();
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TicketDetails({ params }) {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
