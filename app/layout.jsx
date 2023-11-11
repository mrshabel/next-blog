import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
// import { ClerkProvider } from "@clerk/nextjs";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Shabel Next Blog",
  description: "A blog site publishing latest news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ClerkProvider> */}
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
      {/* </ClerkProvider> */}
    </html>
  );
}
