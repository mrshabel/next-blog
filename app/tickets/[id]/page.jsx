import { notFound } from "next/navigation";

// export const dynamic = "force-dynamic";

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(process.env.API_URL + "/api/tickets");
//     const data = await res.json();

//     if (!res.ok) {
//       return null;
//     }

//     const params = data.map((param) => ({ id: param.id }));
//     return params;
//   } catch (err) {
//     console.log(err);
//   }
// }

async function getTicket(id) {
  try {
    console.log(process.env.API_URL, "api");
    const res = await fetch(`${process.env.API_URL}/api/tickets/${id}`, {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return notFound();
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      {!ticket || ticket.length === 0 ? (
        <p>Sorry, no tickets available now</p>
      ) : (
        <>
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
          </div>{" "}
        </>
      )}
    </main>
  );
}
