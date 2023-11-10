"use client";

import { UserButton } from "@clerk/nextjs";
export default function ProfileButton() {
  return <UserButton afterSignOutUrl="/" />;
}
