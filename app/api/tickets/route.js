//CRUD operations for the tickets here

import { connectDb } from "@/libs/db";
import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  const ticket = await request.json();
  await connectDb();
  await Ticket.create(ticket);

  return NextResponse.json(
    { message: "Ticket created successfully" },
    { status: 200 }
  );
}

//read all data
export async function GET() {
  await connectDb();
  const tickets = await Ticket.find();

  if (!tickets) {
    return NextResponse.json({ message: "No tickets found" }, { status: 404 });
  }

  return NextResponse.json(tickets);
}
