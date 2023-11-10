"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [ticket, setTicket] = useState({
    title: "",
    body: "",
    priority: "low",
    user_email: "next@dev.com",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setTicket((ticket) => ({ ...ticket, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(ticket),
      });
      router.refresh();
      router.push("/tickets");
    } catch (error) {
      console.log("An error occured");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label htmlFor="title">
        <span>Title:</span>
        <input type="text" name="title" required onChange={handleChange} />
      </label>
      <label htmlFor="body">
        <span>Body:</span>
        <textarea name="body" required onChange={handleChange} />
      </label>
      <label htmlFor="priority">
        <span>Priority:</span>
        <select type="text" name="priority" required onChange={handleChange}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>

      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
      </button>
    </form>
  );
}
