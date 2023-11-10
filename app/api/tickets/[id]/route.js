import { connectDb } from "@/libs/db";
import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";

export async function PUT({ params }) {
  await connectDb();

  const body = await request.json();

  await Ticket.findByIdAndUpdate(params?.id, body);

  return NextResponse(
    { message: "New ticket added successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  await connectDb();

  const ticket = await Ticket.findById(params?.id);

  if (!ticket) {
    return NextResponse.json(
      { message: "No matching ticket found" },
      { status: 404 }
    );
  }

  return NextResponse.json(ticket);
}

// export async function DELETE(request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");

//   await connectDb();

//   const ticket = await Ticket.findByIdAndDelete(id);

//   if (!ticket) {
//     return NextResponse.json(
//       { message: "No matching ticket found" },
//       { status: 404 }
//     );
//   }

//   return NextResponse.json({ message: "Ticket deleted successfully" });
// }
