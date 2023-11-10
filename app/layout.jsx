import { Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./components/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Shabel Next Blog",
  description: "A blog site publishing latest news",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={raleway.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
