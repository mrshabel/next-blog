import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  body: {
    type: String,
    required: [true, "Body is required."],
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  user_email: {
    type: String,
    required: [true, "User email is required."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.models.ticket || mongoose.model("ticket", ticketSchema);

export default Ticket;
